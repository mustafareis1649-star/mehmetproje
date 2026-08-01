import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Don't throw at import time — lets the app still render (e.g. tool pages
  // that don't need auth) with a clear console warning instead of a blank
  // white screen if the env vars haven't been set yet.
  console.warn(
    '[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY not set. ' +
      'Add them to your .env file — see .env.example.'
  );
}

export const supabase = createClient(url || '', anonKey || '');
