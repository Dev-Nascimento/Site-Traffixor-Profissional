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
    <section id="roi-calc" className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('roi.title')}</h2>
            <p className="text-slate-400 text-lg mb-8">{t('roi.subtitle')}</p>
            <GlassCard className="p-8 space-y-8">
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.contacts')}</span><span className="text-white font-mono">{contacts.toLocaleString()}</span>
                </label>
                <input type="range" min="1000" max="1000000" step="1000" value={contacts} onChange={(e) => setContacts(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.ticket')}</span><span className="text-white font-mono">${ticket}</span>
                </label>
                <input type="range" min="50" max="10000" step="50" value={ticket} onChange={(e) => setTicket(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm text-slate-400 mb-3">
                  <span>{t('roi.conversion')}</span><span className="text-white font-mono">{conversionRate}%</span>
                </label>
                <input type="range" min="0.5" max="10" step="0.1" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
              </div>
              <NeonButton className="w-full" onClick={() => setShowResult(true)}>{t('roi.btn_calc')}</NeonButton>
            </GlassCard>
          </div>
          <GlassCard className="p-8 h-full flex flex-col justify-center min-h-[400px]">
            {showResult ? (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <p className="text-sm text-slate-400 mb-2">{t('roi.result_title')}</p>
                  <p className="text-5xl font-bold text-emerald-400">+${(lift * 12).toLocaleString()}</p>
                  <p className="text-sm text-slate-500 mt-1">{t('roi.result_sub')}</p>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" style={{ width: '100%' }} /></div>
                </div>
                <NeonButton className="w-full">{t('roi.btn_activate')}</NeonButton>
              </div>
            ) : (
              <div className="text-center py-12"><p className="text-slate-400">{t('roi.empty')}</p></div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};