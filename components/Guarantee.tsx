
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-black uppercase tracking-widest mb-4">Teste sem risco</h2>
        <p className="text-gray-500 font-bold mb-10 text-sm">
          Se não gostar, você tem 7 dias para pedir reembolso. Sem perguntas.
        </p>
        
        <div className="flex justify-center gap-12 items-center opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-black rounded flex items-center justify-center text-[8px] font-black italic">SSL</div>
            <span className="text-[10px] font-black uppercase tracking-widest">Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center font-black text-[8px]">7d</div>
             <span className="text-[10px] font-black uppercase tracking-widest">Garantia 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
