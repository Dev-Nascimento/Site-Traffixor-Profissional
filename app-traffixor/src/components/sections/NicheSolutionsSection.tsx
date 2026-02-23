import React, { useState } from 'react';
import { NICHE_CONTENT } from '../../constants/data';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

type NicheTab = 'b2b' | 'b2c' | 'infoproducer';

export const NicheSolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NicheTab>('b2b');

  return (
    <section id="solutions" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Arquitetura adaptável para o seu mercado</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Funcionalidades construídas para resolver os desafios específicos da sua operação.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {(Object.keys(NICHE_CONTENT) as NicheTab[]).map((tab) => {
            const content = NICHE_CONTENT[tab];
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 rounded-xl text-left transition-all duration-300 border ${
                  isActive ? 'bg-emerald-500/10 border-emerald-500/50 shadow-lg' : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <p className="text-sm font-medium text-white">{content.title}</p>
                <p className="text-xs text-slate-500">{content.focus}</p>
              </button>
            );
          })}
        </div>

        {/* Active Content Card */}
        <GlassCard glow className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">
                {NICHE_CONTENT[activeTab].focus}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{NICHE_CONTENT[activeTab].title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">{NICHE_CONTENT[activeTab].description}</p>
              
              <div className="space-y-4 mb-8">
                {NICHE_CONTENT[activeTab].metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-300">{metric}</span>
                  </div>
                ))}
              </div>
              <NeonButton>Ver Documentação para {NICHE_CONTENT[activeTab].title}</NeonButton>
            </div>

            {/* Visual do Nicho (Simulação de Fluxo) */}
            <div className="aspect-video rounded-2xl bg-black/40 border border-white/5 p-4 flex items-center justify-center">
               <div className="text-emerald-400 font-mono text-sm animate-pulse">
                  {`// Executando engine para ${activeTab}...`}
                  <div className="mt-2 text-slate-500">Fluxo otimizado pronto para escala.</div>
               </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};