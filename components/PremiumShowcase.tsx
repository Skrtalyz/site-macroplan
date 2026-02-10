
import React from 'react';
import { motion } from 'framer-motion';

const PremiumShowcase: React.FC = () => {
  const items = [
    'Visual simples e intuitivo',
    'Resultado instantâneo na tela',
    'Experiência de app nativo premium'
  ];

  const imageUrl = "https://i.postimg.cc/Dw2J2PHc/Whats-App-Image-2026-02-10-at-03-07-00.jpg";

  return (
    <section className="py-24 px-4 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
              Feito para usar <br /> e impressionar
            </h2>
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-3xl inline-block">
                <p className="text-emerald-400 font-black text-xs uppercase tracking-[0.3em]">Status do App</p>
                <p className="text-white text-lg font-bold mt-1 italic">"A maneira mais rápida de trackear macros hoje."</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center perspective-1000"
          >
            {/* Efeito de brilho atrás do celular */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Mockup do Celular */}
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] p-3 shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] border-gray-800 ring-1 ring-white/20 overflow-hidden">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gray-800 rounded-full mr-2"></div>
                <div className="w-8 h-1 bg-gray-900 rounded-full"></div>
              </div>

              {/* Volume Buttons Visuals (Side) */}
              <div className="absolute left-[-10px] top-32 w-1 h-12 bg-gray-800 rounded-r-lg"></div>
              <div className="absolute left-[-10px] top-48 w-1 h-12 bg-gray-800 rounded-r-lg"></div>
              <div className="absolute right-[-10px] top-40 w-1 h-16 bg-gray-800 rounded-l-lg"></div>

              {/* Conteúdo da Tela (Imagem do App) */}
              <div className="w-full h-full bg-gray-900 rounded-[2.2rem] overflow-hidden relative shadow-inner">
                <img 
                  src={imageUrl} 
                  alt="Interface do MacroPlan" 
                  className="w-full h-full object-cover"
                />
                
                {/* Reflexo na tela */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
              </div>
            </div>

            {/* Base Decorativa */}
            <div className="absolute -bottom-8 w-48 h-2 bg-black/40 blur-xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumShowcase;
