'use server';

import { createServerClient } from '@/utils/supabase/server';

export const getUser = async () => {
  const { data: user } = await createServerClient()
    .from('user')
    .select('*')
    .single();

  return user;
};
