import { Header } from '@/components/layout/Header';
import { BackToTop } from '@/components/ui/BackToTop';
import { HeroSection } from '@/components/sections/HeroSection';
import { WalletSection } from '@/components/sections/WalletSection';
import { CryptoSection } from '@/components/sections/CryptoSection';
import { DeFiSection } from '@/components/sections/DeFiSection';
import { AppsSection } from '@/components/sections/AppsSection';
import { FutureSection } from '@/components/sections/FutureSection';
import { BuildSection } from '@/components/sections/BuildSection';
import { SupportPoolsSection } from '@/components/sections/SupportPoolsSection';
import { LoreSection } from '@/components/sections/LoreSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { LaunchTimeline } from '@/components/sections/LaunchTimeline';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <WalletSection />
        <CryptoSection />
        <DeFiSection />
        <AppsSection />
        <FutureSection />
        <BuildSection />
        <SupportPoolsSection />
        <section id="lore">
          <LoreSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="timeline">
          <LaunchTimeline />
        </section>
        <section id="newsletter">
          <NewsletterSignup />
        </section>
        <section id="tokenomics">
          {/* Tokenomics section can be added here later */}
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
} 