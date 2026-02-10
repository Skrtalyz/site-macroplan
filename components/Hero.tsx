
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const checkoutUrl = "https://www.ggcheckout.com/checkout/v5/YSQ5HxYnLTTzjB9kgOwO";

  return (
    <section className="pt-32 pb-20 px-4 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center relative">
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-7xl font-extrabold text-black leading-tight mb-6 tracking-tight"
        >
          Descubra as calorias do seu prato em segundos usando uma foto
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium"
        >
          Tire uma foto da sua refeição e veja calorias e macros na hora.
        </motion.p>

        {/* Representação visual do App (Limpa e Realista) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 md:w-52 md:h-52 bg-gray-50 rounded-[2.5rem] p-2 border border-gray-100 overflow-hidden">
              <img 
                src="https://i.postimg.cc/7Y1HdX6h/d397bba217dd78cf4cb2cab7302b8f0a.jpg" 
                className="w-full h-full object-cover rounded-[2rem]"
                alt="Tirando foto"
              />
            </div>
            <span className="mt-4 text-gray-400 font-bold text-xs uppercase tracking-widest">Tire a foto</span>
          </motion.div>

          <div className="hidden md:flex text-gray-200 text-2xl">→</div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 md:w-52 md:h-52 bg-gray-900 rounded-[2.5rem] p-4 flex flex-col items-center justify-center text-white">
              <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
            <span className="mt-4 text-gray-400 font-bold text-xs uppercase tracking-widest">Analisando...</span>
          </motion.div>

          <div className="hidden md:flex text-gray-200 text-2xl">→</div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 md:w-60 md:h-60 bg-white rounded-[2.5rem] p-6 shadow-2xl border border-gray-100 flex items-center justify-center">
               <div className="w-full h-full flex flex-col items-center justify-center">
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Resultado</span>
                 <span className="text-3xl font-black text-black leading-none mb-4">+420 kcal</span>
                 <div className="flex gap-2 w-full">
                    <div className="flex-1 h-8 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold">32g</div>
                    <div className="flex-1 h-8 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold">28g</div>
                    <div className="flex-1 h-8 bg-gray-50 rounded-xl flex items-center justify-center text-[10px] font-bold">14g</div>
                 </div>
               </div>
            </div>
            <span className="mt-4 text-black font-black uppercase tracking-widest text-xs">Resultado!</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={checkoutUrl}
            className="w-full sm:w-auto bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-800 transition-all active:scale-95"
          >
            Acessar o MacroPlan
          </a>
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Pagamento único • Sem mensalidade</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
