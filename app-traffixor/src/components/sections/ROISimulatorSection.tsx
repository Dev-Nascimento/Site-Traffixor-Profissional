import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export const ROISimulatorSection: React.FC = () => {
  const [contacts, setContacts] = useState(10000);
  const [ticket, setTicket] = useState(500);
  const [conversionRate, setConversionRate] = useState(2);
  const [showResult, setShowResult] = useState(false);

  // Lógica do Simulador: Baseline vs Projetado (Traffixor melhora conv. em 40% e ticket em 15%)
  const baselineRevenue = contacts * (conversionRate / 100) * ticket;
  const projectedRevenue = contacts * ((conversionRate * 1.4) / 100) * ticket * 1.15;
  const lift = projectedRevenue - baselineRevenue;

  return (
    <section id="roi-calc" className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neural ROI Simulator</h2>
            <p className="text-slate-400 text-lg mb-8">
              Calcule o impacto financeiro da automação inteligente na sua operação e veja quanto a Traffixor pode escalar seu faturamento.
            </p>

            <GlassCard className="p-8 space-y-8">
              {/* Inputs */}
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>Contatos Mensais</span>
                  <span className="text-white font-mono">{contacts.toLocaleString()}</span>
                </label>
                <input
                  type="range" min="1000" max="1000000" step="1000"
                  value={contacts} onChange={(e) => setContacts(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>Ticket Médio (R$)</span>
                  <span className="text-white font-mono">R$ {ticket}</span>
                </label>
                <input
                  type="range" min="50" max="10000" step="50"
                  value={ticket} onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>Taxa de Conversão Atual</span>
                  <span className="text-white font-mono">{conversionRate}%</span>
                </label>
                <input
                  type="range" min="0.5" max="10" step="0.1"
                  value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <NeonButton className="w-full" onClick={() => setShowResult(true)}>
                Calcular Projeção de Crescimento
              </NeonButton>
            </GlassCard>
          </div>

          {/* Resultado Visual */}
          <GlassCard className="p-8 h-full flex flex-col justify-center min-h-[400px]">
            {showResult ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Aumento Anual Projetado</p>
                  <p className="text-5xl font-bold text-emerald-400">
                    +R$ {(lift * 12).toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Com a qualificação e automação da Traffixor</p>
                </div>

                <div className="space-y-4">
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-white">+40%</p>
                      <p className="text-sm text-slate-500">Conversão</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">+15%</p>
                      <p className="text-sm text-slate-500">Ticket Médio</p>
                    </div>
                  </div>
                </div>

                <NeonButton className="w-full">Ativar esse Crescimento Agora</NeonButton>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <p className="text-slate-400">Ajuste os parâmetros e veja a mágica dos dados acontecer.</p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};