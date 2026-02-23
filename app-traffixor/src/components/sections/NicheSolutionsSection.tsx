import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

type NicheTab = 'b2b' | 'b2c' | 'info';

export const NicheSolutionsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<NicheTab>('b2b');

  const contentMap = {
    b2b: { title: t('niche.b2b_title'), focus: t('niche.b2b_focus'), desc: t('niche.b2b_desc') },
    b2c: { title: t('niche.b2c_title'), focus: t('niche.b2c_focus'), desc: t('niche.b2c_desc') },
    info: { title: t('niche.info_title'), focus: t('niche.info_focus'), desc: t('niche.info_desc') }
  };

  return (
    <section id="solutions" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('niche.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('niche.subtitle')}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {(Object.keys(contentMap) as NicheTab[]).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-4 rounded-xl text-left transition-all border ${activeTab === tab ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-white/5 border-white/10'}`}>
              <p className="text-sm font-medium text-white">{contentMap[tab].title}</p>
              <p className="text-xs text-slate-500">{contentMap[tab].focus}</p>
            </button>
          ))}
        </div>
        <GlassCard glow className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-6">{contentMap[activeTab].focus}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{contentMap[activeTab].title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">{contentMap[activeTab].desc}</p>
              <NeonButton>{t('niche.btn')} {contentMap[activeTab].title}</NeonButton>
            </div>
            <div className="aspect-video rounded-2xl bg-black/40 border border-white/5 p-4 flex items-center justify-center">
               <div className="text-emerald-400 font-mono text-sm animate-pulse">
                  {t('niche.engine')} {activeTab}...<div className="mt-2 text-slate-500">{t('niche.flow')}</div>
               </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};