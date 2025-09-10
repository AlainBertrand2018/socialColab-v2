
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n.config';
import { BetaWelcomeDialog } from '@/components/landing/beta-welcome-dialog';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <BetaWelcomeDialog lang={lang} content={dictionary.betaWelcome} />
      <Header lang={lang} navigation={dictionary.navigation} auth={dictionary.navigation.auth} />
      {children}
      <Footer lang={lang} content={dictionary.footer} />
    </>
  );
}
