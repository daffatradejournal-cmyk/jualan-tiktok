import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DeviceShowcase } from './components/DeviceShowcase';
import { ProductCard } from './components/ProductCard';
import { ComparisonSection } from './components/ComparisonSection';
import { ProcessSteps } from './components/ProcessSteps';
import { TrustGuarantees } from './components/TrustGuarantees';
import { FaqSection } from './components/FaqSection';
import { ProductModal } from './components/ProductModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { LiveToast } from './components/LiveToast';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Sparkles } from 'lucide-react';

export function App() {
  const [modalProductId, setModalProductId] = useState<string | null>(null);

  const selectedProduct = PRODUCTS.find(p => p.id === modalProductId) || null;

  const scrollToServices = () => {
    const el = document.getElementById('services-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onSelectProduct={(id) => setModalProductId(id)}
          onExploreGallery={scrollToServices}
        />

        {/* Interactive Device Screen Simulator */}
        <DeviceShowcase 
          onOpenModal={(id) => setModalProductId(id)}
        />

        {/* Product & Services Showcase Grid */}
        <section id="services-section" className="py-14 sm:py-20 bg-surface-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* Section Tagline */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" /> Katalog Layanan Unggulan
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-surface-950 tracking-tight">
                Pilih Solusi Kebutuhan Digital Anda
              </h2>
              <p className="text-xs sm:text-base text-surface-600 mt-2">
                Layanan instalasi setup tablet Android produktivitas tinggi atau penerbitan berkas pajak resmi kilat.
              </p>
            </div>

            {/* Grid 2 Cards: High-Contrast & Tactile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {PRODUCTS.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenModal={(id) => setModalProductId(id)}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Before vs After Comparison */}
        <ComparisonSection />

        {/* 3 Step Ordering Process */}
        <ProcessSteps />

        {/* Trust Badges & Guarantee */}
        <TrustGuarantees />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Detail Modal Sheet */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setModalProductId(null)}
      />

      {/* Mobile Sticky Bar */}
      <StickyMobileBar />

      {/* Live Social Proof Ticker */}
      <LiveToast />
    </div>
  );
}

export default App;
