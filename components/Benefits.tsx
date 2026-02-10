
import React from 'react';
import { motion } from 'framer-motion';

const Benefits: React.FC = () => {
  const benefits = [
    'Não precisa procurar tabela',
    'Funciona com qualquer refeição',
    'Resultado rápido',
    'Sem mensalidade',
    'Use quando quiser'
  ];

  return (
    <section id="beneficios" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-black text-center mb-12 tracking-tight"
        >
          Por que usar o MacroPlan
        </motion.h2>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100"
            >
              <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-bold text-gray-800">{benefit}</p>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 font-bold mt-12 text-sm uppercase tracking-widest">
          Ideal pra comer melhor sem fazer conta.
        </p>
      </div>
    </section>
  );
};

export default Benefits;
