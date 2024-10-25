import HeaderAuth from '@/components/header-auth';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { User } from '@supabase/supabase-js';

export interface NavbarProps {
  user: User | null;
}

export default async function Navbar({ user }: NavbarProps) {
  return (
    <nav className="flex h-16 w-full items-center justify-center border-b border-b-foreground/10 p-3">
      {user && <SidebarTrigger />}
      <div className="flex w-full items-center justify-end text-sm">
        <HeaderAuth user={user} />
      </div>
    </nav>
  );
}
