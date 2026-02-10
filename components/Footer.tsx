
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-bold">MacroPlan</div>
        <div className="text-gray-400 text-sm">
          © 2026 MacroPlan. Todos os direitos reservados.
        </div>
        <div className="flex gap-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
           <a href="#" className="hover:text-black">Termos</a>
           <a href="#" className="hover:text-black">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
