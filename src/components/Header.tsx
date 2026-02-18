import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User, ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { label: "L'accueil", to: '/' },
    { label: 'À propos', to: '/a-propos' },
    { label: 'Notre Collection', to: '/collection' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          {/* Left - Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 luxury-transition hover:text-gold"
            aria-label="Menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <h1 className="font-display text-xl md:text-2xl tracking-[0.3em] font-medium">
              CHALHER <span className="text-gold">PARIS</span>
            </h1>
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 luxury-transition hover:text-gold"
              aria-label="Rechercher"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/login" className="p-2 luxury-transition hover:text-gold">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 luxury-transition hover:text-gold relative"
              aria-label="Panier"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-noir text-xs flex items-center justify-center rounded-full font-sans font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="px-6 py-3 md:px-10">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-transparent font-sans text-sm tracking-wider outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-noir/60 z-[60]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
              className="fixed top-0 left-0 h-full w-80 bg-noir z-[70] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-noir-light">
                <span className="font-display text-lg tracking-[0.2em] text-cream">
                  CHALHER <span className="text-gold">PARIS</span>
                </span>
                <button onClick={() => setMenuOpen(false)} className="text-cream hover:text-gold luxury-transition">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-xl text-cream hover:text-gold luxury-transition tracking-wider"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-8 border-t border-noir-light">
                <p className="font-sans text-xs text-cream/50 tracking-wider uppercase">
                  L'élégance à la Parisienne
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
