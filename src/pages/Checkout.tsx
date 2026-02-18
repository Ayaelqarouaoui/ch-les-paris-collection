import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Building2, Truck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

type PaymentMethod = 'card' | 'paypal' | 'bank' | 'cod';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { items, totalPrice, clearCart } = useCart();

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="pt-24 pb-24 min-h-screen flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <h1 className="font-display text-3xl">Merci pour votre commande</h1>
          <div className="gold-line mt-4" />
          <p className="font-body text-lg text-muted-foreground mt-6">
            Votre commande a été confirmée. Vous recevrez un e-mail de confirmation sous peu.
          </p>
          <Link to="/" className="inline-block mt-8 border border-foreground px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase hover:bg-noir hover:text-cream luxury-transition">
            Retour à l'accueil
          </Link>
        </motion.div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-24 pb-24 min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl">Votre panier est vide</h1>
          <div className="gold-line mt-4" />
          <Link to="/collection" className="inline-flex items-center gap-2 mt-8 text-gold font-sans text-xs tracking-[0.2em] uppercase">
            <ArrowLeft size={14} /> Voir la collection
          </Link>
        </div>
      </main>
    );
  }

  const methods: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    { id: 'card', label: 'Carte Bancaire', icon: <CreditCard size={18} /> },
    { id: 'paypal', label: 'PayPal', icon: <span className="font-sans text-sm font-semibold">P</span> },
    { id: 'bank', label: 'Virement Bancaire', icon: <Building2 size={18} /> },
    { id: 'cod', label: 'Paiement à la livraison', icon: <Truck size={18} /> },
  ];

  return (
    <main className="pt-24 pb-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Chalher Paris</p>
          <h1 className="font-display text-3xl md:text-4xl mt-3">Paiement</h1>
          <div className="gold-line mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Order Summary */}
          <div>
            <h2 className="font-display text-xl mb-6">Récapitulatif</h2>
            <div className="space-y-4 border-b border-border pb-6">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />
                  <div className="flex-1">
                    <p className="font-display text-sm">{item.name}</p>
                    <p className="font-sans text-xs text-muted-foreground">Qté: {item.quantity}</p>
                  </div>
                  <p className="font-sans text-sm text-gold">{(item.price * item.quantity).toLocaleString()} €</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-4 font-sans tracking-wider">
              <span className="text-sm">Total</span>
              <span className="text-lg text-gold font-medium">{totalPrice.toLocaleString()} €</span>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <h2 className="font-display text-xl mb-6">Mode de paiement</h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {methods.map(m => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`flex items-center gap-2 p-3 border font-sans text-xs tracking-wider luxury-transition ${
                    paymentMethod === m.id ? 'border-gold text-gold bg-gold/5' : 'border-border hover:border-gold/50'
                  }`}
                >
                  {m.icon}
                  {m.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleOrder} className="space-y-6">
              {paymentMethod === 'card' && (
                <>
                  <div>
                    <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Numéro de carte</label>
                    <input type="text" placeholder="1234 5678 9012 3456" maxLength={19}
                      className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Expiration</label>
                      <input type="text" placeholder="MM/AA" maxLength={5}
                        className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition" />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">CVV</label>
                      <input type="text" placeholder="123" maxLength={4}
                        className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition" />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === 'paypal' && (
                <div className="p-8 border border-border text-center">
                  <p className="font-sans text-sm text-muted-foreground mb-4">Vous serez redirigé vers PayPal pour finaliser votre paiement.</p>
                  <div className="inline-block bg-[#0070ba] text-cream px-8 py-3 rounded font-sans text-sm font-medium tracking-wider">
                    PayPal
                  </div>
                </div>
              )}

              {paymentMethod === 'bank' && (
                <div className="p-6 border border-border space-y-3">
                  <h3 className="font-display text-sm">Coordonnées bancaires (RIB)</h3>
                  <div className="font-sans text-sm text-muted-foreground space-y-1">
                    <p><span className="text-foreground">Banque :</span> Banque de France</p>
                    <p><span className="text-foreground">IBAN :</span> FR76 1234 5678 9012 3456 7890 123</p>
                    <p><span className="text-foreground">BIC :</span> CHALFRPP</p>
                    <p><span className="text-foreground">Titulaire :</span> Chalher Paris SAS</p>
                  </div>
                  <p className="font-sans text-xs text-gold mt-3">Veuillez indiquer votre numéro de commande en référence.</p>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="p-6 border border-border">
                  <p className="font-sans text-sm text-muted-foreground">
                    Le paiement sera effectué à la réception de votre commande. Un supplément de 15 € sera appliqué pour ce mode de paiement.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-noir text-cream font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-noir luxury-transition"
              >
                Confirmer la commande — {totalPrice.toLocaleString()} €
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
