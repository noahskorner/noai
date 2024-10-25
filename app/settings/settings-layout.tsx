import Link from 'next/link';
import { routes } from '../routes';

export interface SettingsLayoutProps {
  route: string;
  children: React.ReactNode;
}

export default function SettingsLayout({
  route,
  children,
}: SettingsLayoutProps) {
  return (
    <main className="flex h-full w-full flex-1 flex-col gap-4 md:gap-8">
      <div className="mx-auto grid w-full gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>
      <div className="grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground"
          x-chunk="dashboard-04-chunk-0"
        >
          <Link
            href={routes.authorized.settings.general}
            className={
              route === routes.authorized.settings.general
                ? 'font-semibold text-primary'
                : ''
            }
          >
            General
          </Link>
        </nav>
        {children}
      </div>
    </main>
  );
}
