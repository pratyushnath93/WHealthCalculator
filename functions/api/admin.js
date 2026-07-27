// functions/api/admin.js
// Password-protected admin API to add/edit/delete foods and meals
// Password is stored in Cloudflare Secrets Store as ADMIN_PASSWORD

// ─── Auth Helper ─────────────────────────────────────────────────────────────
function checkAuth(request, env) {
  const authHeader = request.headers.get('Authorization') || '';
  const token = authHeader.replace('Bearer ', '').trim();
  return token === env.ADMIN_PASSWORD;
}

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

// ─── OPTIONS (CORS Preflight) ─────────────────────────────────────────────────
export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

// ─── GET — List all foods or meals ───────────────────────────────────────────
export async function onRequestGet(context) {
  const { env, request } = context;
  if (!checkAuth(request, env)) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers: CORS });
  }
  const url = new URL(request.url);
  const type = url.searchParams.get('type') || 'foods';
  try {
    const table = type === 'meals' ? 'meals' : 'foods';
    const result = await env.DB.prepare(`SELECT * FROM ${table} ORDER BY id DESC`).all();
    return new Response(JSON.stringify({ success: true, data: result.results }), { headers: CORS });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: CORS });
  }
}

// ─── POST — Add new food or meal ──────────────────────────────────────────────
export async function onRequestPost(context) {
  const { env, request } = context;
  if (!checkAuth(request, env)) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers: CORS });
  }
  try {
    const body = await request.json();
    const { type, data } = body;

    if (type === 'food') {
      const result = await env.DB.prepare(
        'INSERT INTO foods (name, cal, prot, carb, fat, fiber, calcium, iron, unit, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        data.name, data.cal || 0, data.prot || 0, data.carb || 0,
        data.fat || 0, data.fiber || 0, data.calcium || 0, data.iron || 0,
        data.unit || 'g', data.country || 'IN'
      ).run();
      return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }), { headers: CORS });
    }

    if (type === 'meal') {
      const result = await env.DB.prepare(
        'INSERT INTO meals (name, meal_slot, meal_time, profile, diet_type, country, city) VALUES (?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        data.name, data.meal_slot, data.meal_time || '',
        data.profile || 'balanced', data.diet_type || 'veg',
        data.country || 'IN', data.city || 'all'
      ).run();
      return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }), { headers: CORS });
    }

    if (type === 'ingredient') {
      const result = await env.DB.prepare(
        'INSERT INTO meal_ingredients (meal_id, ingredient_name, base_qty, unit, cal, protein, carbs, fat, micros) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
      ).bind(
        data.meal_id, data.ingredient_name, data.base_qty || 0,
        data.unit || 'g', data.cal || 0, data.protein || 0,
        data.carbs || 0, data.fat || 0,
        JSON.stringify(data.micros || {})
      ).run();
      return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }), { headers: CORS });
    }

    return new Response(JSON.stringify({ success: false, error: 'Unknown type. Use food, meal, or ingredient.' }), { status: 400, headers: CORS });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: CORS });
  }
}

// ─── PUT — Update existing food or meal ───────────────────────────────────────
export async function onRequestPut(context) {
  const { env, request } = context;
  if (!checkAuth(request, env)) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers: CORS });
  }
  try {
    const body = await request.json();
    const { type, id, data } = body;

    if (type === 'food') {
      await env.DB.prepare(
        'UPDATE foods SET name=?, cal=?, prot=?, carb=?, fat=?, fiber=?, calcium=?, iron=?, unit=?, country=? WHERE id=?'
      ).bind(
        data.name, data.cal || 0, data.prot || 0, data.carb || 0,
        data.fat || 0, data.fiber || 0, data.calcium || 0, data.iron || 0,
        data.unit || 'g', data.country || 'IN', id
      ).run();
      return new Response(JSON.stringify({ success: true }), { headers: CORS });
    }

    if (type === 'meal') {
      await env.DB.prepare(
        'UPDATE meals SET name=?, meal_slot=?, meal_time=?, profile=?, diet_type=?, country=?, city=? WHERE id=?'
      ).bind(
        data.name, data.meal_slot, data.meal_time || '',
        data.profile || 'balanced', data.diet_type || 'veg',
        data.country || 'IN', data.city || 'all', id
      ).run();
      return new Response(JSON.stringify({ success: true }), { headers: CORS });
    }

    return new Response(JSON.stringify({ success: false, error: 'Unknown type' }), { status: 400, headers: CORS });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: CORS });
  }
}

// ─── DELETE — Remove food or meal ─────────────────────────────────────────────
export async function onRequestDelete(context) {
  const { env, request } = context;
  if (!checkAuth(request, env)) {
    return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401, headers: CORS });
  }
  try {
    const body = await request.json();
    const { type, id } = body;

    if (type === 'food') {
      await env.DB.prepare('DELETE FROM foods WHERE id = ?').bind(id).run();
      return new Response(JSON.stringify({ success: true }), { headers: CORS });
    }

    if (type === 'meal') {
      // Also delete all ingredients for this meal
      await env.DB.prepare('DELETE FROM meal_ingredients WHERE meal_id = ?').bind(id).run();
      await env.DB.prepare('DELETE FROM meals WHERE id = ?').bind(id).run();
      return new Response(JSON.stringify({ success: true }), { headers: CORS });
    }

    if (type === 'ingredient') {
      await env.DB.prepare('DELETE FROM meal_ingredients WHERE id = ?').bind(id).run();
      return new Response(JSON.stringify({ success: true }), { headers: CORS });
    }

    return new Response(JSON.stringify({ success: false, error: 'Unknown type' }), { status: 400, headers: CORS });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: CORS });
  }
}
