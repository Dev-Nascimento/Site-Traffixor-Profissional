import React from 'react';
import { TraffixorLogo } from '../ui/TraffixorLogo';
import { NeonButton } from '../ui/NeonButton';
import { PDFDownloadLink } from '@react-pdf/renderer'; 
import { TraffixorPDF } from '../pdf/TraffixorPDF';

export const EbookLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-emerald-500/30">
      {/* Background de Alta Performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <TraffixorLogo />
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            Engenharia Operacional B2B
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            PARE DE PERDER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              LUCRO PARA O CAOS.
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
            Descubra como a <strong>Orquestração Neural</strong> elimina o trabalho manual e escala suas operações com inteligência e lucro real.
          </p>

          <ul className="space-y-4 mb-10">
            {["Os 5 Fluxos de Ouro da automação.", "Sincronização Ads e CRM por lucro.", "ROI sistêmico em tempo real."].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Card de Captura com Nota de Segurança */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Baixe o Playbook</h3>
            <p className="text-slate-500 text-sm mb-6">O arquivo PDF será gerado instantaneamente pela nossa infraestrutura.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Seu Nome" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors" />
              <input type="email" placeholder="E-mail Corporativo" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors" />

              <PDFDownloadLink document={<TraffixorPDF />} fileName="Traffixor-Playbook-Neural.pdf">
                {({ loading }) => (
                  <NeonButton className="w-full py-4 justify-center text-lg mt-4" disabled={loading}>
                    {loading ? 'PROCESSANDO ENGENHARIA...' : 'RECEBER ACESSO IMEDIATO'}
                  </NeonButton>
                )}
              </PDFDownloadLink>
            </form>
            
            {/* A parte que faltava: Nota de Segurança e Edição */}
            <p className="text-[10px] text-slate-600 mt-6 text-center italic leading-tight">
              *Seus dados estão protegidos pela infraestrutura de segurança Traffixor. <br />
              Este documento foi editado e gerado dinamicamente para seu acesso exclusivo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};