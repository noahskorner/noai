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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <meta
        httpEquiv="Content-Security-Policy"
        content="block-all-mixed-content"
      ></meta>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen w-full flex flex-col items-center">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full flex justify-end items-center p-3 px-5 text-sm">
                <HeaderAuth />
              </div>
            </nav>
            <div className="h-[calc(100vh-4rem)] flex flex-col items-stretch gap-20 max-w-5xl w-full p-5">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
