import HeaderAuth from '@/components/header-auth';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import './globals.css';

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
          <main className="flex min-h-screen w-full flex-col items-center">
            <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
              <div className="flex w-full items-center justify-end p-3 px-5 text-sm">
                <HeaderAuth />
              </div>
            </nav>
            <div className="flex h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-stretch gap-20 p-5">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
