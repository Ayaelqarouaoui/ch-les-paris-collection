import { motion } from 'framer-motion';

const About = () => (
  <main className="pt-24 pb-24">
    <section className="max-w-3xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-muted-foreground">Notre Histoire</p>
        <h1 className="font-display text-4xl md:text-5xl mt-3">À Propos</h1>
        <div className="gold-line mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8 font-body text-lg text-muted-foreground leading-relaxed"
      >
        <p>
          Née au cœur de Paris, la maison <span className="text-gold font-display">Chalher</span> perpétue
          l'art ancestral du châle d'exception. Chaque pièce est le fruit d'un savoir-faire artisanal transmis
          de génération en génération.
        </p>
        <p>
          Nos châles sont confectionnés à partir des matières les plus nobles — cachemire, soie, fourrure —
          sélectionnées avec la plus grande exigence. Les motifs, des classiques paisley aux imprimés audacieux,
          racontent l'histoire d'un luxe intemporel.
        </p>
        <p>
          Chez Chalher Paris, nous croyons que le véritable luxe réside dans les détails : la douceur d'un
          tissu, la précision d'une finition, l'émotion d'un motif. Chaque châle est une invitation au voyage,
          une promesse d'élégance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 p-10 bg-secondary text-center"
      >
        <p className="font-display text-xl italic text-gold">
          "L'élégance est la seule beauté qui ne se fane jamais."
        </p>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mt-4">
          — Audrey Hepburn
        </p>
      </motion.div>
    </section>
  </main>
);

export default About;
