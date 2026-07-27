/**
 * WHealth Calculator - D1 Database Population Script
 * Reads diet-db.js and central-food-db.js and generates SQL INSERT statements
 */

const fs = require('fs');
const path = require('path');

// ─── Load FOODS from central-food-db.js ───────────────────────────────────────
console.log('📦 Loading central-food-db.js...');
let foodsRaw = fs.readFileSync(
  path.join(__dirname, 'mobile-app', 'central-food-db.js'),
  'utf8'
);

// Extract FOODS_JSON_ARRAY — split on DIET_DATABASE boundary
let FOODS_JSON_ARRAY = [];
try {
  // Split file at the point where DIET_DATABASE starts
  const splitIdx = foodsRaw.indexOf('\nvar DIET_DATABASE');
  const foodsPart = splitIdx > 0 ? foodsRaw.substring(0, splitIdx) : foodsRaw;
  // Find the opening bracket of FOODS_JSON_ARRAY
  const arrStart = foodsPart.indexOf('var FOODS_JSON_ARRAY');
  const arrContent = foodsPart.substring(arrStart).replace(/^var FOODS_JSON_ARRAY\s*=\s*/, '').trim().replace(/;\s*$/, '');
  FOODS_JSON_ARRAY = eval(arrContent);
  console.log(`✅ Loaded ${FOODS_JSON_ARRAY.length} foods`);
} catch (e) {
  console.error('❌ Failed to parse FOODS_JSON_ARRAY:', e.message);
}

// ─── Load DIET_DATABASE from diet-db.js ───────────────────────────────────────
console.log('📦 Loading diet-db.js...');
let dietRaw = fs.readFileSync(
  path.join(__dirname, 'mobile-app', 'diet-db.js'),
  'utf8'
);

// Strip window.DIET_DATABASE = prefix and get the object
const dietMatch = dietRaw.match(/window\.DIET_DATABASE\s*=\s*(\{[\s\S]*\});?\s*$/);
let DIET_DATABASE = {};
if (dietMatch) {
  try {
    DIET_DATABASE = eval('(' + dietMatch[1] + ')');
    console.log(`✅ Loaded DIET_DATABASE for countries: ${Object.keys(DIET_DATABASE).join(', ')}`);
  } catch (e) {
    console.error('❌ Failed to parse DIET_DATABASE:', e.message);
  }
}

// ─── Helper: escape SQL strings ───────────────────────────────────────────────
function esc(str) {
  if (str === null || str === undefined) return 'NULL';
  return `'${String(str).replace(/'/g, "''")}'`;
}

function num(v) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

// ─── Generate SQL ─────────────────────────────────────────────────────────────
const lines = [];
lines.push('-- ============================================================');
lines.push('-- WHealth Calculator - D1 Database Population SQL');
lines.push('-- Generated: ' + new Date().toISOString());
lines.push('-- ============================================================');
lines.push('');
// D1 remote does not support BEGIN TRANSACTION or PRAGMA
lines.push('');

// ── 1. Countries ──────────────────────────────────────────────────────────────
lines.push('-- --- COUNTRIES ---');
for (const [code, data] of Object.entries(DIET_DATABASE)) {
  lines.push(`INSERT OR IGNORE INTO countries (code, name) VALUES (${esc(code)}, ${esc(data.name || code)});`);
}
lines.push('');

// ── 2. Cities (from meal city tags) ──────────────────────────────────────────
lines.push('-- --- CITIES ---');
const citiesAdded = new Set();

for (const [countryCode, countryData] of Object.entries(DIET_DATABASE)) {
  if (!countryData.meals) continue;
  for (const [slotKey, slotData] of Object.entries(countryData.meals)) {
    if (!Array.isArray(slotData.options)) continue;
    for (const meal of slotData.options) {
      const cities = meal.cities || ['all'];
      for (const city of cities) {
        const key = `${countryCode}:${city}`;
        if (!citiesAdded.has(key)) {
          citiesAdded.add(key);
          const label = city.charAt(0).toUpperCase() + city.slice(1);
          lines.push(`INSERT OR IGNORE INTO cities (country_code, city_name, city_label) VALUES (${esc(countryCode)}, ${esc(city)}, ${esc(label)});`);
        }
      }
    }
  }
}
lines.push('');

// ── 3. Foods ──────────────────────────────────────────────────────────────────
lines.push('-- --- FOODS ---');
lines.push(`-- Total foods: ${FOODS_JSON_ARRAY.length}`);

const foodsSeen = new Set();
let foodCount = 0;
for (const f of FOODS_JSON_ARRAY) {
  const key = `${f.name}|${f.country || 'IN'}`;
  if (foodsSeen.has(key)) continue;
  foodsSeen.add(key);
  foodCount++;
  lines.push(
    `INSERT OR IGNORE INTO foods (name, cal, prot, carb, fat, fiber, calcium, iron, unit, country) VALUES (` +
    `${esc(f.name)}, ${num(f.cal)}, ${num(f.prot)}, ${num(f.carb)}, ${num(f.fat)}, ` +
    `${num(f.fiber)}, ${num(f.calcium)}, ${num(f.iron)}, ${esc(f.unit)}, ${esc(f.country || 'IN')});`
  );
}
console.log(`✅ Prepared ${foodCount} unique food inserts`);
lines.push('');

// ── 4. Meals + Meal Ingredients ───────────────────────────────────────────────
lines.push('-- --- MEALS ---');

let mealId = 1;
const mealInserts = [];
const ingredientInserts = [];

for (const [countryCode, countryData] of Object.entries(DIET_DATABASE)) {
  if (!countryData.meals) continue;

  for (const [slotKey, slotData] of Object.entries(countryData.meals)) {
    const mealTime = slotData.time || '';

    if (!Array.isArray(slotData.options)) continue;

    for (const meal of slotData.options) {
      const cities = meal.cities || ['all'];
      const cityStr = cities.join(',');

      mealInserts.push(
        `INSERT INTO meals (id, name, meal_slot, meal_time, profile, diet_type, country, city) VALUES (` +
        `${mealId}, ${esc(meal.name)}, ${esc(slotKey)}, ${esc(mealTime)}, ` +
        `${esc(meal.profile || 'balanced')}, ${esc(meal.type || 'veg')}, ${esc(countryCode)}, ${esc(cityStr)});`
      );

      if (Array.isArray(meal.ingredients)) {
        for (const ing of meal.ingredients) {
          const micros = ing.micros || {};
          const microsJson = JSON.stringify(micros).replace(/'/g, "''");
          ingredientInserts.push(
            `INSERT INTO meal_ingredients (meal_id, ingredient_name, base_qty, unit, cal, protein, carbs, fat, micros) VALUES (` +
            `${mealId}, ${esc(ing.name)}, ${num(ing.baseQty)}, ${esc(ing.unit)}, ${num(ing.cal)}, ` +
            `${num(ing.p)}, ${num(ing.c)}, ${num(ing.f)}, '${microsJson}');`
          );
        }
      }

      mealId++;
    }
  }
}

lines.push(...mealInserts);
lines.push('');
lines.push('-- --- MEAL INGREDIENTS ---');
lines.push(...ingredientInserts);
lines.push('');
// End of SQL
lines.push('');
lines.push(`-- Summary:`);
lines.push(`-- Countries: ${Object.keys(DIET_DATABASE).length}`);
lines.push(`-- Cities: ${citiesAdded.size}`);
lines.push(`-- Foods: ${foodCount}`);
lines.push(`-- Meals: ${mealId - 1}`);
lines.push(`-- Ingredients: ${ingredientInserts.length}`);

// ─── Write output file ────────────────────────────────────────────────────────
const outputPath = path.join(__dirname, 'd1-populate.sql');
fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');

const stats = fs.statSync(outputPath);
console.log('');
console.log('=======================================================');
console.log('✅ SQL file generated: d1-populate.sql');
console.log(`📊 File size: ${(stats.size / 1024).toFixed(1)} KB`);
console.log(`📊 Countries: ${Object.keys(DIET_DATABASE).length}`);
console.log(`📊 Cities: ${citiesAdded.size}`);
console.log(`📊 Foods: ${foodCount}`);
console.log(`📊 Meals: ${mealId - 1}`);
console.log(`📊 Ingredients: ${ingredientInserts.length}`);
console.log('=======================================================');
