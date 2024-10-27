import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { createServerClient } from '@/utils/supabase/server';
import { SidebarProvider } from '@/components/ui/sidebar';
import Sidebar from './sidebar';
import Navbar from './navbar';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'noai',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: { user },
  } = await createServerClient().auth.getUser();

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <meta
        httpEquiv="Content-Security-Policy"
        content={`upgrade-insecure-requests`}
      />
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            {user && <Sidebar />}
            <main className="flex min-h-screen w-full flex-col items-center">
              <Navbar user={user} />
              <div className="flex h-[calc(100vh-4rem)] w-full flex-col items-center gap-20 p-5">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
