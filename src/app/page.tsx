import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HeroSaaS } from '@/components/portfolio/HeroSaaS';
import { BentoAuthority } from '@/components/portfolio/BentoAuthority';
import { ProjectsFeed } from '@/components/portfolio/ProjectsFeed';
import { getSiteVisitCount } from '@/lib/site-visits';

export default async function Home() {
  const visitCount = await getSiteVisitCount();

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="home-snap flex flex-1 flex-col">
        <HeroSaaS />
        <BentoAuthority visitCount={visitCount} />
        <ProjectsFeed />
      </main>

      <Footer />
    </div>
  );
}
