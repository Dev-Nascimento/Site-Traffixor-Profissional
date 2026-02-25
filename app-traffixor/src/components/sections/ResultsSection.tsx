import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const ResultsSection: React.FC = () => {
  const { t } = useTranslation();

  const cases = [
    {
      title: t('results.case1_title'),
      metric: t('results.case1_metric'),
      desc: t('results.case1_desc'),
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-400 to-cyan-400"
    },
    {
      title: t('results.case2_title'),
      metric: t('results.case2_metric'),
      desc: t('results.case2_desc'),
      icon: <TrendingDown className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-400 to-green-400" // Verde indicando que a queda no CAC é algo bom
    },
    {
      title: t('results.case3_title'),
      metric: t('results.case3_metric'),
      desc: t('results.case3_desc'),
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      color: "from-emerald-400 to-teal-400"
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('results.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('results.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <GlassCard key={idx} className="p-8 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                {item.title}
              </h3>
              
              <div className={`text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                {item.metric}
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};