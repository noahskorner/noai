'use server';

import { createServerClient } from '@/utils/supabase/server';

export const updateUserHostAction = async (formData: FormData) => {
  const supabase = createServerClient();
  const { data } = await supabase.auth.getUser();

  if (data == null || data.user == null)
    return {
      status: 401,
    };

  return await supabase
    .from('user')
    .update({
      host: formData.get('host')?.toString(),
    })
    .eq('id', data.user.id);
};
