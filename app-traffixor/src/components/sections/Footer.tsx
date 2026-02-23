import React from 'react';

export const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/5 relative z-10 bg-[#09090E]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-4">
            TRAFFIXOR
          </div>
          <p className="text-slate-500 text-sm max-w-sm">
            Orquestrando o futuro do marketing digital através de automação neural e inteligência de dados de alta performance.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Plataforma</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Soluções</a></li>
            <li><a href="#roi-calc" className="hover:text-emerald-400 transition-colors">Simulador</a></li>
            <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Preços</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li>Privacidade</li>
            <li>Termos de Uso</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
        <p>© 2026 Traffixor Automation. Todos os direitos reservados.</p>
        <p>Desenvolvido para escala global.</p>
      </div>
    </div>
  </footer>
);