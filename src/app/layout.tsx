import type { Metadata } from 'next';
import { Poppins, PT_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { i18n, type Locale } from '@/i18n.config';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '600', '700'],
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-sans',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Social Colab',
  description: 'Social Colab is the direct path to powerful, authentic collaborations. A zero-commission platform built to empower Mauritian and regional brands connect with a vetted community of creators.',
  openGraph: {
    title: 'Social Colab',
    description: 'The 0% commision platform for Brands and Creators Colabs',
    images: ['/images/socialColab_Creator_at_Work.webp']
  }
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning className={cn(poppins.variable, ptSans.variable)}>
      <body className={cn('font-body antialiased')}>
        <Providers>
            <div className="flex min-h-screen flex-col">
              <main className="flex-1">
                {children}
              </main>
            </div>
        </Providers>
      </body>
    </html>
  );
}
