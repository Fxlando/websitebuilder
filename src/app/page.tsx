import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WalletSection } from '@/components/sections/WalletSection';
import { CryptoSection } from '@/components/sections/CryptoSection';
import { DeFiSection } from '@/components/sections/DeFiSection';
import { AppsSection } from '@/components/sections/AppsSection';
import { FutureSection } from '@/components/sections/FutureSection';
import { BuildSection } from '@/components/sections/BuildSection';
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
      </main>
      <Footer />
    </div>
  );
} 