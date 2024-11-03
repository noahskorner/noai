import { supabase } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  NextResponse.redirect(data.url); // Redirects the user to GitHub for OAuth
}
