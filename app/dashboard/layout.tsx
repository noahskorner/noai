import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { routes } from '../routes';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect(routes.signIn);
  }

  return <>{children}</>;
}
