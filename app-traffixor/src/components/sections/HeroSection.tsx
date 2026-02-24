import React from 'react';
import { useTranslation } from 'react-i18next'; // Importamos o tradutor
import { NeonButton } from '../ui/NeonButton';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation(); // Ligamos o tradutor

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          {t('hero.badge')}
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            {t('hero.title')}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          {t('hero.subtitle')}
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton variant="primary" className="w-full sm:w-auto">
            {t('hero.cta_primary')}
          </NeonButton>
          <NeonButton 
            variant="secondary" 
            className="w-full sm:w-auto"
            onClick={() => window.open('https://global-author-a12.notion.site/Traffixor-Docs-Motor-Neural-v3-0-300dbf1cb64280bf8c66e21273cf89aa', '_blank')}
          >
            {t('hero.cta_secondary')}
          </NeonButton>
        </div>

      </div>
    </section>
  );
};