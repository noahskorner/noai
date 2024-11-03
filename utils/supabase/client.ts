import { Database } from '@/supabase/schema';
import { createBrowserClient as supabaseCreateBrowserClient } from '@supabase/ssr';

const createBrowserClient = () =>
  supabaseCreateBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const supabase = createBrowserClient();
