// functions/api/foods.js
// Returns all foods or filtered by country
export async function onRequestGet(context) {
  const { env, request } = context;
  try {
    const url = new URL(request.url);
    const country = url.searchParams.get('country') || '';

    let query, results;
    if (country) {
      results = await env.DB.prepare(
        'SELECT * FROM foods WHERE country = ? ORDER BY name'
      ).bind(country).all();
    } else {
      results = await env.DB.prepare(
        'SELECT * FROM foods ORDER BY name'
      ).all();
    }

    return new Response(JSON.stringify({ success: true, data: results.results }), {
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
