import React from 'react';
import { TraffixorLogo } from '../ui/TraffixorLogo'; // Importando a marca da autoridade

const Obrigado: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-emerald-500/30 flex flex-col items-center justify-start relative overflow-hidden p-6 py-12 md:py-20">
      
      {/* Background Decorativo com Glow (Igual a Home) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        
        {/* --- 🦅 A LOGO DA AUTORIDADE GRIITANDO NA CARA DELE --- */}
        <div className="flex justify-center mb-16 md:mb-20 scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <TraffixorLogo />
        </div>

        {/* Badge de Status Pulsante */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Acesso Liberado com Sucesso
        </div>

        {/* Headline Agressiva */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
          NÃO FECHE ESTA PÁGINA AINDA.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            VOCÊ DEU APENAS O PRIMEIRO PASSO.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          O Playbook Neural que acabou de chegar no seu e-mail tem a teoria exata para estancar o vazamento de lucro da sua operação. <strong className="text-white">Mas teoria sem execução não enche o caixa.</strong>
        </p>

        {/* Placeholder de VSL (Vídeo de Vendas) */}
        <div className="aspect-video w-full max-w-3xl mx-auto bg-black/60 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center mb-12 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            
            {/* Ícone de Play Visual */}
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50 z-20 transition-transform cursor-pointer hover:scale-110 hover:bg-emerald-500/30">
                <svg className="w-8 h-8 text-emerald-400 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="absolute bottom-6 z-20 text-slate-300 font-medium tracking-wide text-sm md:text-base px-4">
              ASSISTA A ESTE VÍDEO RÁPIDO ANTES DE LER O MATERIAL
            </p>
        </div>

        {/* Box de Conversão (CTA) */}
        <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl max-w-2xl mx-auto backdrop-blur-sm shadow-2xl relative overflow-hidden mb-16">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Quer a Traffixor rodando no seu negócio?</h3>
            <p className="text-slate-400 mb-8 text-lg">
                Nossa engenharia pode plugar essa exata automação na sua empresa. Selecione um horário abaixo para uma Sessão de Diagnóstico gratuita comigo.
            </p>

            <a 
              href="https://Calendly.com/seu-link" // <-- Lembre-se de trocar aqui depois, Luiz!
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full px-8 py-5 font-bold text-white transition-all duration-200 bg-emerald-600 rounded-xl hover:bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] uppercase tracking-wide text-lg"
            >
              QUERO AGENDAR MEU DIAGNÓSTICO
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            
            <p className="mt-6 text-xs text-slate-500 font-mono uppercase tracking-wider">
                ⚠️ Vagas limitadas. Atendemos apenas empresas com caixa validado.
            </p>
        </div>

      </div>
    </div>
  );
};

export default Obrigado;