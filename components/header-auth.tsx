import { signOutAction } from '@/app/actions';
import Link from 'next/link';
import { Button } from './ui/button';
import { ThemeSwitcher } from './theme-switcher';
import { routes } from '../app/routes';
import { User } from '@supabase/supabase-js';

export interface HeaderAuthProps {
  user: User | null;
}

export default async function HeaderAuth({ user }: HeaderAuthProps) {
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
