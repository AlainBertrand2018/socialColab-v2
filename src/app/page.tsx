import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Showcase } from '@/components/landing/showcase';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
