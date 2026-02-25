import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export const ROISimulatorSection: React.FC = () => {
  const { t } = useTranslation();
  const [contacts, setContacts] = useState(10000);
  const [ticket, setTicket] = useState(500);
  const [conversionRate, setConversionRate] = useState(2);
  const [showResult, setShowResult] = useState(false);

  const baselineRevenue = contacts * (conversionRate / 100) * ticket;
  const projectedRevenue = contacts * ((conversionRate * 1.4) / 100) * ticket * 1.15;
  const lift = projectedRevenue - baselineRevenue;

  return (
    // ID ajustado para bater exatamente com o botão "Calcular Meu ROI" do HeroSection
    <section id="roi-simulator" className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Headline Agressiva focada na dor */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('roi.title', 'Descubra quanto dinheiro você está perdendo.')}
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              {t('roi.subtitle', 'Ajuste os números da sua operação atual e veja o tamanho do vazamento de lucro que a falta de orquestração inteligente está causando.')}
            </p>
            <GlassCard className="p-8 space-y-8">
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.contacts', 'Leads/Contatos por mês')}</span>
                  <span className="text-white font-mono">{contacts.toLocaleString('pt-BR')}</span>
                </label>
                <input type="range" min="1000" max="1000000" step="1000" value={contacts} onChange={(e) => setContacts(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.ticket', 'Ticket Médio (R$)')}</span>
                  <span className="text-white font-mono">R$ {ticket.toLocaleString('pt-BR')}</span>
                </label>
                <input type="range" min="50" max="10000" step="50" value={ticket} onChange={(e) => setTicket(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.conversion', 'Taxa de Conversão Atual')}</span>
                  <span className="text-white font-mono">{conversionRate}%</span>
                </label>
                <input type="range" min="0.5" max="10" step="0.1" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <NeonButton className="w-full" onClick={() => setShowResult(true)}>
                {t('roi.btn_calc', 'Revelar Lucro Oculto')}
              </NeonButton>
            </GlassCard>
          </div>
          <GlassCard className="p-8 h-full flex flex-col justify-center min-h-[400px] relative overflow-hidden">
            
            {/* Efeito vermelho no fundo para reforçar a "perda" */}
            {showResult && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
            )}

            {showResult ? (
              <div className="space-y-8 animate-in fade-in duration-500 relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-6 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    ALERTA DE VAZAMENTO DE CAIXA
                  </div>
                  <p className="text-sm text-slate-400 mb-2">
                    {t('roi.result_title', 'Você está deixando na mesa aproximadamente:')}
                  </p>
                  
                  {/* Resultado em Vermelho (Psicologia da Aversão à Perda) */}
                  <p className="text-5xl md:text-6xl font-bold text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.2)]">
                    R$ {Math.round(lift).toLocaleString('pt-BR')} <span className="text-xl text-slate-500 font-normal">/mês</span>
                  </p>
                  
                  <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                    {t('roi.result_sub', 'Isso representa uma perda anual projetada de ')}
                    <span className="text-white font-bold">R$ {Math.round(lift * 12).toLocaleString('pt-BR')}</span>
                    {' por depender de processos manuais e integrações frágeis.'}
                  </p>
                </div>

                <div className="space-y-4 p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                   <p className="text-sm text-emerald-100/80">
                     A Traffixor estanca esse sangramento através da recuperação automatizada de leads, follow-ups neurais e otimização de conversão em tempo real.
                   </p>
                </div>

                <NeonButton
                  variant="primary"
                  className="w-full mt-6"
                  // Mensagem do WhatsApp adaptada para o novo contexto
                  onClick={() => window.open('https://wa.me/5521984834409?text=Ol%C3%A1%21+Calculei+meu+ROI+e+quero+estancar+a+perda+de+lucro+na+minha+opera%C3%A7%C3%A3o+agora+mesmo.', '_blank')}
                >
                  Estancar Sangramento Financeiro
                </NeonButton>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-400">
                  {t('roi.empty', 'Configure os números ao lado para calcular o tamanho do seu prejuízo invisível.')}
                </p>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};