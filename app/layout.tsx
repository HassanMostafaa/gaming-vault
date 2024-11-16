import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GameVault - Video Games News',
  description: 'Your source for the latest video game news and releases',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="bg-gradient-to-br from-background to-muted min-h-screen">
            <main className="container mx-auto px-4 pb-24">
              {children}
            </main>
            <Navigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}