import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/30 luxury-transition flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
              category: product.category,
            })}
            className="flex items-center gap-2 bg-cream text-noir px-6 py-3 font-sans text-xs tracking-[0.15em] uppercase hover:bg-gold luxury-transition"
          >
            <ShoppingBag size={14} />
            Ajouter au panier
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{product.category}</p>
        <h3 className="font-display text-lg mt-1">{product.name}</h3>
        <p className="font-body text-sm text-muted-foreground mt-1">{product.description}</p>
        <p className="font-sans text-sm text-gold mt-2 tracking-wider">{product.price} MAD</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
