import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { leadSchema } from './schema.ts';

Deno.serve(async request => {
  const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  if (Number(request.headers.get('content-length') ?? 0) > 8192) return respond({ error: 'Request too large' }, 413);
  try {
    const parsed = leadSchema.safeParse(await request.json());
    if (!parsed.success) return respond({ error: 'Please check your details.' }, 400);
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Enquiries temporarily unavailable.' }, 503);
    const client = createClient(url, key);
    const { website: _honeypot, ...lead } = parsed.data;
    const { error } = await client.from('website_enquiries').insert(lead);
    if (error && error.code !== '23505') return respond({ error: 'Could not save your request.' }, 500);
    return respond({ success: true });
  } catch { return respond({ error: 'Could not process your request.' }, 400); }
});