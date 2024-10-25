'use server';

import { createServerClient } from '@/utils/supabase/server';

export const updateUserHostAction = async (formData: FormData) => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  return await supabase
    .from('user')
    .update({
      host: formData.get('host')?.toString(),
    })
    .eq('id', user.data.user?.id);
};
