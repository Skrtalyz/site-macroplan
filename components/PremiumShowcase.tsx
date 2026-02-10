
import React from 'react';
import { motion } from 'framer-motion';

const PremiumShowcase: React.FC = () => {
  const items = [
    'Visual simples',
    'Resultado instantâneo',
    'Aparência de app premium'
  ];

  return (
    <section className="py-24 px-4 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-8 leading-tight tracking-tight">
              Feito para usar e mostrar
            </h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-xs">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 p-8 rounded-[3rem] shadow-2xl"
          >
             <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-950 rounded-2xl flex items-center justify-center">
                <span className="text-white/20 font-black italic">UI PREVIEW</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;
