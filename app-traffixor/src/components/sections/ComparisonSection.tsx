import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { bad: t('comparison.row1_bad'), good: t('comparison.row1_good') },
    { bad: t('comparison.row2_bad'), good: t('comparison.row2_good') },
    { bad: t('comparison.row3_bad'), good: t('comparison.row3_good') },
  ];

  return (
    <section className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('comparison.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Card: Ferramentas Tradicionais (Visual de "Aviso/Erro") */}
          <div className="bg-white/5 border border-red-500/10 rounded-2xl p-8 relative grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-400">{t('comparison.traditional')}</h3>
              <p className="text-sm text-slate-500 mt-2">O padrão do passado</p>
            </div>
            
            <ul className="space-y-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-slate-400">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span>{feature.bad}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Traffixor (Visual Premium/Neon) */}
          <div className="relative">
            {/* Efeito de brilho no fundo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-25" />
            
            <GlassCard className="p-8 relative border-emerald-500/30 ring-1 ring-emerald-500/20">
              <div className="absolute top-0 right-0 px-4 py-1 bg-emerald-500 text-black text-xs font-bold rounded-bl-lg rounded-tr-xl">
                O NOVO PADRÃO
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">{t('comparison.traffixor')}</h3>
                <p className="text-sm text-emerald-400 mt-2">Motor Neural Ativo</p>
              </div>
              
              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="font-medium">{feature.good}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};