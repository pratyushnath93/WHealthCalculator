// functions/api/meals.js
// Returns meals filtered by country, city, diet_type
// Also returns meal ingredients when meal_id is specified
export async function onRequestGet(context) {
  const { env, request } = context;
  try {
    const url = new URL(request.url);
    const country   = url.searchParams.get('country')  || 'IN';
    const city      = url.searchParams.get('city')      || '';
    const diet      = url.searchParams.get('diet')      || '';
    const slot      = url.searchParams.get('slot')      || '';
    const meal_id   = url.searchParams.get('meal_id')   || '';

    // If meal_id provided — return ingredients for that meal
    if (meal_id) {
      const ingredients = await env.DB.prepare(
        'SELECT * FROM meal_ingredients WHERE meal_id = ?'
      ).bind(meal_id).all();
      return new Response(JSON.stringify({ success: true, data: ingredients.results }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }

    // Build dynamic query for meals
    let conditions = ['country = ?'];
    let params = [country];

    if (city) {
      // city column stores comma-separated list e.g. "mumbai,delhi" or "all"
      conditions.push("(city = 'all' OR city LIKE ? OR city LIKE ? OR city LIKE ? OR city = ?)");
      params.push(`${city},%`, `%,${city},%`, `%,${city}`, city);
    }
    if (diet) {
      conditions.push('diet_type = ?');
      params.push(diet);
    }
    if (slot) {
      conditions.push('meal_slot = ?');
      params.push(slot);
    }

    const whereClause = conditions.length ? 'WHERE ' + conditions.join(' AND ') : '';
    const query = `SELECT * FROM meals ${whereClause} ORDER BY meal_slot, id`;

    const meals = await env.DB.prepare(query).bind(...params).all();

    // For each meal, also fetch its ingredients
    const mealIds = meals.results.map(m => m.id);
    let ingredients = [];
    if (mealIds.length > 0) {
      const placeholders = mealIds.map(() => '?').join(',');
      const ingResult = await env.DB.prepare(
        `SELECT * FROM meal_ingredients WHERE meal_id IN (${placeholders})`
      ).bind(...mealIds).all();
      ingredients = ingResult.results;
    }

    // Attach ingredients to each meal
    const mealsWithIngredients = meals.results.map(meal => ({
      ...meal,
      ingredients: ingredients
        .filter(ing => ing.meal_id === meal.id)
        .map(ing => ({
          ...ing,
          micros: ing.micros ? JSON.parse(ing.micros) : {}
        }))
    }));

    return new Response(JSON.stringify({ success: true, data: mealsWithIngredients }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
