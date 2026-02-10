
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: '📸',
      title: 'Tire uma foto do prato',
      description: 'Aponte a câmera e capture sua refeição.'
    },
    {
      icon: '⚡',
      title: 'O MacroPlan analisa automaticamente',
      description: 'O app identifica os alimentos para você.'
    },
    {
      icon: '📊',
      title: 'Veja calorias e macros em segundos',
      description: 'O resultado aparece direto na sua tela.'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-4 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-black text-center mb-16 tracking-tight"
        >
          Como funciona na prática
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center flex flex-col items-center"
            >
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
