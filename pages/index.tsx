import Head from 'next/head';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { HeroSection } from '../src/components/sections/HeroSection';
import { LoreSection } from '../src/components/sections/LoreSection';
import { FeaturesSection } from '../src/components/sections/FeaturesSection';
import { LaunchTimeline } from '../src/components/sections/LaunchTimeline';
import { NewsletterSignup } from '../src/components/sections/NewsletterSignup';

export default function Home() {
  return (
    <>
      <Head>
        <title>$BLOB Token - Blob Has Awakened</title>
        <meta name="description" content="Born from memes. Built for traders. Advanced trading tools and meme coin innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        <Header />
        
        <main>
          <HeroSection />
          <LoreSection />
          <FeaturesSection />
          <LaunchTimeline />
          <NewsletterSignup />
        </main>

        <Footer />
      </div>
    </>
  );
} 