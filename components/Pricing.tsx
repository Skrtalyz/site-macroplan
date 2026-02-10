
import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v5/YSQ5HxYnLTTzjB9kgOwO";

  return (
    <section id="preco" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-black mb-12 tracking-tight"
        >
          Use o MacroPlan sempre que quiser
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-2 border-black relative"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
            Acesso Vitalício
          </div>
          
          <div className="mb-10">
            <span className="text-6xl font-black text-emerald-600 tracking-tighter">R$29,90</span>
            <p className="text-gray-900 font-black uppercase text-xs mt-4 tracking-widest">Pagamento único</p>
          </div>
          
          <div className="space-y-4 mb-10 text-center">
            <p className="font-bold text-gray-700">Análises ilimitadas por foto</p>
            <p className="font-bold text-gray-700">Acesso imediato</p>
          </div>
          
          <motion.a 
            href={checkoutUrl}
            whileTap={{ scale: 0.95 }}
            className="block w-full bg-black text-white py-6 rounded-full text-xl font-bold hover:bg-gray-800 transition-all shadow-xl"
          >
            Desbloquear acesso agora
          </motion.a>
          
          <p className="text-[10px] text-gray-400 mt-8 font-black uppercase tracking-widest opacity-50">
            Menos de R$1 por dia se usar por um mês.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
