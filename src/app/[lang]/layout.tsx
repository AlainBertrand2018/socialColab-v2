import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { getDictionary } from '@/lib/dictionaries';
import { Locale } from '@/i18n.config';

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Header navigation={dictionary.navigation} auth={dictionary.navigation.auth} />
      {children}
      <Footer content={dictionary.footer} />
    </>
  );
}
