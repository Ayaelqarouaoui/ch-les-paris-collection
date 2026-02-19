import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Chalher Paris - Châles de luxe" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-noir/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-cream/80 mb-4"
          >
            Collection 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-cream tracking-wider"
          >
            L'Art du Châle
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-px bg-gold mx-auto mt-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-cream/70 mt-6 max-w-lg mx-auto"
          >
            Des châles d'exception, tissés avec passion et raffinement à Paris.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              to="/collection"
              className="inline-flex items-center gap-3 mt-10 border border-cream/40 text-cream px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold hover:border-gold hover:text-noir luxury-transition"
            >
              Découvrir la collection
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Sélection</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Pièces d'Exception</h2>
          <div className="gold-line mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {featuredProducts.map((product, index) => (
            <RouterLink to={`/product/${product.id}`} key={product.id} className="block">
              <ProductCard product={product} index={index} />
            </RouterLink>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/collection"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase hover:bg-noir hover:text-cream luxury-transition"
          >
            Voir toute la collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-secondary py-24 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Notre Maison</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">L'Élégance Parisienne</h2>
          <div className="gold-line mt-4" />
          <p className="font-body text-lg text-muted-foreground mt-8 leading-relaxed">
            Depuis Paris, Chalher incarne le savoir-faire artisanal français. Chaque châle est une œuvre d'art, 
            alliant matières nobles et motifs intemporels pour sublimer celle qui le porte.
          </p>
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 mt-8 text-gold font-sans text-xs tracking-[0.2em] uppercase hover:text-gold-dark luxury-transition"
          >
            En savoir plus
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
