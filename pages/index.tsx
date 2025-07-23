// Updated for Netlify deployment - pages directory at root level
import Head from 'next/head';
import { Header } from '../src/components/layout/Header';
import { Footer } from '../src/components/layout/Footer';
import { HeroSection } from '../src/components/sections/HeroSection';
import { FeaturesSection } from '../src/components/sections/FeaturesSection';
import { ProductsSection } from '../src/components/sections/ProductsSection';
import { TestimonialsSection } from '../src/components/sections/TestimonialsSection';
import { CTASection } from '../src/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Head>
        <title>YourBrand - Transform Your Business with Innovation</title>
        <meta name="description" content="Discover cutting-edge solutions that revolutionize how you work, built with the latest technology and designed for the future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProductsSection />
          <TestimonialsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
} 