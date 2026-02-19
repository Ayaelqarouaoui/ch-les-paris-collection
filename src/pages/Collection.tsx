import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <main className="pt-24 pb-24">
      <div className="text-center px-6 mb-16">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Chalher Paris</p>
        <h1 className="font-display text-4xl md:text-5xl mt-3">Notre Collection</h1>
        <div className="gold-line mt-4" />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 px-6 mb-16">
        <button
          onClick={() => setActiveCategory(null)}
          className={`font-sans text-xs tracking-[0.15em] uppercase px-6 py-2 border luxury-transition ${
            !activeCategory ? 'bg-noir text-cream border-noir' : 'border-border hover:border-gold hover:text-gold'
          }`}
        >
          Tout voir
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-xs tracking-[0.15em] uppercase px-6 py-2 border luxury-transition ${
              activeCategory === cat ? 'bg-noir text-cream border-noir' : 'border-border hover:border-gold hover:text-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {filtered.map((product, index) => (
            <Link to={`/product/${product.id}`} key={product.id} className="block">
              <ProductCard product={product} index={index} />
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Collection;
