import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { NeonButton } from '../ui/NeonButton';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090E] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <ShieldAlert className="w-24 h-24 text-emerald-500 mb-8 animate-pulse relative z-10" />
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight relative z-10 font-mono">
        ERRO <span className="text-emerald-500 text-shadow-neon">404</span>
      </h1>
      
      <div className="bg-black/50 border border-emerald-500/20 p-6 rounded-xl mb-8 max-w-md mx-auto relative z-10 backdrop-blur-sm">
        <p className="text-emerald-400 font-mono text-sm text-left">
          {'>'} STATUS: ACESSO RESTRITO<br/>
          {'>'} MOTIVO: Atualização do Motor Neural v3.0<br/>
          {'>'} CONEXÃO: VPS Offline temporariamente.<br/>
          <span className="animate-pulse">_</span>
        </p>
      </div>

      <div className="relative z-10">
        {/* O botão redireciona de volta para a página principal */}
        <a href="/">
          <NeonButton variant="primary">
            Retornar à Base
          </NeonButton>
        </a>
      </div>
    </div>
  );
};