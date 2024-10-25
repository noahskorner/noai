import { signOutAction } from '@/app/actions';
import Link from 'next/link';
import { Button } from './ui/button';
import { createServerClient } from '@/utils/supabase/server';
import { ThemeSwitcher } from './theme-switcher';
import { routes } from '../app/routes';

export default async function AuthButton() {
  const {
    data: { user },
  } = await createServerClient().auth.getUser();

  return (
    <div className="flex gap-2">
      {user ? (
        <div className="flex items-center gap-4">
          Hey, {user.email}!
          <form action={signOutAction}>
            <Button type="submit" variant={'outline'}>
              Sign out
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button asChild size="sm" variant={'outline'}>
            <Link href={routes.public.signIn}>Sign in</Link>
          </Button>
          <Button asChild size="sm" variant={'default'}>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      )}
      <ThemeSwitcher />
    </div>
  );
}
