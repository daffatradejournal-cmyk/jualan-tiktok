import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { TrustGuarantees } from './components/TrustGuarantees';
import { FaqSection } from './components/FaqSection';
import { ProductModal } from './components/ProductModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';

export function App() {
  const [modalProductId, setModalProductId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeFilter === 'all') return true;
    return p.id === activeFilter;
  });

  const selectedProduct = PRODUCTS.find(p => p.id === modalProductId) || null;

  return (
    <div className="min-h-screen bg-surface-50 text-surface-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow">
        {/* Minimalist Hero */}
        <Hero 
          activeFilter={activeFilter}
          onFilterChange={(filter) => setActiveFilter(filter)}
        />

        {/* Product Cards: The 2 Core Offers */}
        <section className="px-4 py-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={(id) => setModalProductId(id)}
              />
            ))}
          </div>
        </section>

        {/* Trust Badges: Fast, Safe, Guarantee, Flexible */}
        <TrustGuarantees />

        {/* Essential FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detail Modal Sheet (Unclipped Photos & Specs) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setModalProductId(null)}
      />

      {/* Sticky Mobile Bar with Dual WhatsApp CTAs */}
      <StickyMobileBar />
    </div>
  );
}

export default App;
