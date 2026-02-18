import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-noir text-cream py-16 px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl tracking-[0.3em]">
          CHALHER <span className="text-gold">PARIS</span>
        </h2>
        <div className="gold-line mt-4" />
        <p className="font-body text-sm text-cream/60 mt-4 tracking-wider">
          L'élégance à la Parisienne
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Navigation</h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="font-sans text-sm text-cream/70 hover:text-gold luxury-transition">L'accueil</Link>
            <Link to="/collection" className="font-sans text-sm text-cream/70 hover:text-gold luxury-transition">Notre Collection</Link>
            <Link to="/a-propos" className="font-sans text-sm text-cream/70 hover:text-gold luxury-transition">À propos</Link>
          </div>
        </div>
        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Contact</h3>
          <div className="flex flex-col gap-2 font-sans text-sm text-cream/70">
            <p>contact@chalher-paris.com</p>
            <p>+33 1 42 60 00 00</p>
            <p>Paris, France</p>
          </div>
        </div>
        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">Légal</h3>
          <div className="flex flex-col gap-2 font-sans text-sm text-cream/70">
            <span>Conditions générales</span>
            <span>Politique de confidentialité</span>
            <span>Livraison & Retours</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-cream/10 text-center">
        <p className="font-sans text-xs text-cream/40 tracking-wider">
          © 2026 Chalher Paris. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
