import { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <main className="pt-24 pb-24 min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl">{isSignUp ? 'Créer un compte' : 'Connexion'}</h1>
          <div className="gold-line mt-4" />
        </div>

        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          {isSignUp && (
            <div>
              <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Nom complet</label>
              <input
                type="text"
                className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition"
                placeholder="Votre nom"
              />
            </div>
          )}
          <div>
            <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">E-mail</label>
            <input
              type="email"
              className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">Mot de passe</label>
            <input
              type="password"
              className="w-full mt-2 pb-2 border-b border-border bg-transparent font-sans text-sm outline-none focus:border-gold luxury-transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-noir text-cream font-sans text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-noir luxury-transition mt-4"
          >
            {isSignUp ? "S'inscrire" : 'Se connecter'}
          </button>
        </form>

        <p className="text-center mt-8 font-sans text-sm text-muted-foreground">
          {isSignUp ? 'Déjà un compte ?' : 'Pas encore de compte ?'}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-gold hover:text-gold-dark luxury-transition underline"
          >
            {isSignUp ? 'Se connecter' : "S'inscrire"}
          </button>
        </p>
      </motion.div>
    </main>
  );
};

export default Login;
