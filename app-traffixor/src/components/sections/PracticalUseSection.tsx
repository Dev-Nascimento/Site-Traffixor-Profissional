import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { MessageSquare, RefreshCw, Target, Zap, BarChart } from 'lucide-react';

export const PracticalUseSection: React.FC = () => {
  const { t } = useTranslation();

  const practicalFeatures = [
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      title: t('practical.card1_title'),
      desc: t('practical.card1_desc'),
      delay: "delay-[100ms]"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-emerald-400" />,
      title: t('practical.card2_title'),
      desc: t('practical.card2_desc'),
      delay: "delay-[200ms]"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      title: t('practical.card3_title'),
      desc: t('practical.card3_desc'),
      delay: "delay-[300ms]"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: t('practical.card4_title'),
      desc: t('practical.card4_desc'),
      delay: "delay-[400ms]"
    },
    {
      icon: <BarChart className="w-6 h-6 text-emerald-400" />,
      title: t('practical.card5_title'),
      desc: t('practical.card5_desc'),
      delay: "delay-[500ms]"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#060609]">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <Zap className="w-3 h-3" />
            CLAREZA BRUTAL
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('practical.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('practical.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicalFeatures.map((feature, idx) => (
            <GlassCard 
              key={idx} 
              className={`p-6 hover:border-emerald-500/30 transition-all duration-300 group ${
                idx === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              } ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};