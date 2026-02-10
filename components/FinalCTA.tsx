
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v5/YSQ5HxYnLTTzjB9kgOwO";

  return (
    <section className="py-28 px-4 bg-black text-white text-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Basta uma foto. Resultado na hora.
        </h2>
        <p className="text-gray-500 text-lg mb-12 font-bold uppercase tracking-widest text-sm">
          Pagamento único • Sem mensalidade
        </p>
        
        <motion.a 
          href={checkoutUrl}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-black px-12 py-6 rounded-full text-xl font-black hover:bg-gray-100 transition-all"
        >
          Usar o MacroPlan agora
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
