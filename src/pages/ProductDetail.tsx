import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem } = useCart();

  if (!product) {
    return (
      <main className="pt-24 pb-24 text-center px-6">
        <h1 className="font-display text-3xl">Produit non trouvé</h1>
        <Link to="/collection" className="text-gold mt-4 inline-block font-sans text-sm tracking-wider">
          ← Retour à la collection
        </Link>
      </main>
    );
  }

  const related = getRelatedProducts(product.id, 10);

  return (
    <main className="pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-8">
        <Link to="/collection" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold luxury-transition font-sans text-xs tracking-wider uppercase">
          <ArrowLeft size={14} />
          Retour à la collection
        </Link>
      </div>

      {/* Product */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="aspect-[3/4] bg-secondary overflow-hidden"
        >
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{product.category}</p>
          <h1 className="font-display text-3xl md:text-4xl mt-2">{product.name}</h1>
          <div className="gold-line-left mt-4" />
          <p className="font-body text-lg text-muted-foreground mt-6 leading-relaxed">
            {product.longDescription || product.description}
          </p>

          {(product.material || product.dimensions) && (
            <div className="mt-8 space-y-3 border-t border-border pt-6">
              {product.material && (
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-muted-foreground tracking-wider">Matière</span>
                  <span>{product.material}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-muted-foreground tracking-wider">Dimensions</span>
                  <span>{product.dimensions}</span>
                </div>
              )}
            </div>
          )}

          <p className="font-sans text-2xl text-gold mt-8 tracking-wider">{product.price} €</p>

          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              category: product.category,
            })}
            className="mt-8 flex items-center justify-center gap-3 bg-noir text-cream px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-noir luxury-transition"
          >
            <ShoppingBag size={16} />
            Ajouter au panier
          </button>
        </motion.div>
      </div>

      {/* Vous aimerez aussi */}
      <section className="mt-24 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Recommandations</p>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Vous aimerez aussi</h2>
          <div className="gold-line mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {related.map((p, i) => (
            <Link to={`/product/${p.id}`} key={p.id} className="block">
              <ProductCard product={p} index={i} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
