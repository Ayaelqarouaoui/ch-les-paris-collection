import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-noir/60 z-[80]"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-[90] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-lg tracking-wider">Votre Panier</h2>
              <button onClick={() => setIsCartOpen(false)} className="hover:text-gold luxury-transition">
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="font-sans text-sm text-muted-foreground tracking-wider">Votre panier est vide</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                      <div className="flex-1">
                        <h3 className="font-display text-sm">{item.name}</h3>
                        <p className="font-sans text-xs text-muted-foreground mt-1">{item.category}</p>
                        <p className="font-sans text-sm text-gold mt-1">{item.price} €</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-gold">
                            <Minus size={14} />
                          </button>
                          <span className="font-sans text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-gold">
                            <Plus size={14} />
                          </button>
                          <button onClick={() => removeItem(item.id)} className="ml-auto hover:text-destructive">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex justify-between font-sans text-sm tracking-wider">
                    <span>Total</span>
                    <span className="text-gold font-medium">{totalPrice.toLocaleString()} €</span>
                  </div>
                  <Link
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full py-3 bg-noir text-cream text-center font-sans text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-noir luxury-transition"
                  >
                    Commander
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
