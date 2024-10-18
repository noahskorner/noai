'use server';

import { createClient } from '@/utils/supabase/server';

export const getUser = async () => {
  const { data: user } = await createClient().from('user').select('*').single();

  return user;
};
