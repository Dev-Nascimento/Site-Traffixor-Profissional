import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NeonButton } from '../ui/NeonButton';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  // 1. Estados para o efeito de digitação
  const [typedText, setTypedText] = useState('');
  
  // Puxando o texto do arquivo JSON corretamente
  const enemyText = t('hero.enemy');

  // 2. O Motor de Digitação
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    
    setTypedText('');
    
    const interval = setInterval(() => {
      // Garante que enemyText existe antes de tentar digitar
      if (enemyText && currentIndex < enemyText.length) {
        currentText += enemyText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [enemyText]); // Se o idioma for trocado, a digitação recomeça

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          {t('hero.badge')}
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            {t('hero.title')}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-6">
          {t('hero.subtitle')}
        </p>

        {/* O Inimigo Comum com Efeito de Digitação + Cursor Piscando */}
        <div className="h-8 mb-10 flex items-center justify-center">
          <p className="text-sm font-mono text-emerald-500/80">
            {typedText}
            <span className="animate-pulse ml-1 text-emerald-400">_</span>
          </p>
        </div>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* 🚀 O GATILHO DO FUNIL NA VITRINE PRINCIPAL */}
          <NeonButton 
            variant="primary" 
            className="w-full sm:w-auto"
            onClick={() => window.location.href = '/guia-neural'}
          >
            {t('hero.cta_primary', 'Baixar Playbook Gratuito')}
          </NeonButton>
          
          <NeonButton 
            variant="secondary" 
            className="w-full sm:w-auto"
            onClick={() => {
              const roiSection = document.getElementById('roi-simulator');
              if (roiSection) {
                roiSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '#roi-simulator';
              }
            }}
          >
            {t('hero.cta_secondary')}
          </NeonButton>
        </div>

      </div>
    </section>
  );
};