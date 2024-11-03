'use server';

import { supabase } from '@/utils/supabase/server';

export const getUser = async () => {
  const {
    data: { user: auth },
  } = await supabase.auth.getUser();
  if (auth == null) return null;

  const { data: user } = await supabase
    .from('user')
    .select('*')
    .eq('id', auth.id)
    .single();
  return user;
};
