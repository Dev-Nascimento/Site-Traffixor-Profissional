import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';

export const ProblemSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="platform" className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('problem.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('problem.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: t('problem.card1_title'), desc: t('problem.card1_desc'), icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
            { title: t('problem.card2_title'), desc: t('problem.card2_desc'), icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: t('problem.card3_title'), desc: t('problem.card3_desc'), icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
          ].map((card, i) => (
            <GlassCard key={i} glow className="p-8">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} /></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-slate-400 leading-relaxed">{card.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};