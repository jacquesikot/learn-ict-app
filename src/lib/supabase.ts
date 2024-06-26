import { createClient } from '@supabase/supabase-js';

const supabasePrivateKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
if (!supabasePrivateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
if (!supabaseUrl) throw new Error(`Expected env var PUBLIC_SUPABASE_URL`);

const supabaseAdminClient = createClient(supabaseUrl, supabasePrivateKey, {
  auth: { persistSession: false },
});

export { supabaseAdminClient };
