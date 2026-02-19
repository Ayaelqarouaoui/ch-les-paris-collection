import { Link } from 'react-router-dom';

const WHATSAPP_NUMBER = '212704131681';
const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour Chalher Paris, je suis intéressé(e) par vos châles.');
const WHATSAPP_URL = `https://wa.me/${0704131681}?text=${BONJOUR}`;
const INSTAGRAM_URL = 'https://instagram.com/chalherparis';

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
        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/50 hover:text-gold luxury-transition">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-cream/50 hover:text-gold luxury-transition">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </a>
        </div>
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
