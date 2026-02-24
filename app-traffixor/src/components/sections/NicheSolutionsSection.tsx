import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { Cpu, ShoppingCart, GraduationCap, ArrowRight } from 'lucide-react';

// Sub-componente que faz o efeito de digitação
const TypewriterLog = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reseta o texto quando o conteúdo muda
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Velocidade da digitação

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div className="font-mono text-[10px] md:text-xs text-emerald-400/90 leading-relaxed min-h-[40px]">
      <span className="text-emerald-500 mr-2 font-bold">{'>'}</span>
      {displayedText}
      <span className="animate-pulse ml-1 text-emerald-400 bg-emerald-400 w-2 h-4 inline-block align-middle"></span>
    </div>
  );
};

export const NicheSolutionsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeNiche, setActiveNiche] = useState<'b2b' | 'b2c' | 'info'>('b2b');

  const niches = [
    { id: 'b2b', icon: Cpu, title: t('niche.b2b_title') },
    { id: 'b2c', icon: ShoppingCart, title: t('niche.b2c_title') },
    { id: 'info', icon: GraduationCap, title: t('niche.info_title') },
  ];

  // Monta a frase que será digitada baseada no nicho ativo
  const logMessage = `${t('niche.engine')} ${t(`niche.${activeNiche}_title`)}... ${t('niche.flow')}`;

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('niche.title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t('niche.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo: Seleção de Nichos */}
          <div className="space-y-4">
            {niches.map((niche) => {
              const Icon = niche.icon;
              const isActive = activeNiche === niche.id;
              
              return (
                <button
                  key={niche.id}
                  onClick={() => setActiveNiche(niche.id as any)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive 
                      ? 'bg-emerald-500/10 border-emerald-500/50 scale-[1.02]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isActive ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{niche.title}</h3>
                      <p className="text-sm text-slate-400">{t(`niche.${niche.id}_focus`)}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Lado Direito: Visualizador de Automação (A Caixinha) */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
            <GlassCard className="relative p-8 border-white/10 bg-black/60 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                <span className="text-[10px] text-slate-500 ml-2 font-mono uppercase tracking-widest">Traffixor_Terminal_v3.0</span>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-black/40 rounded border border-emerald-500/20 min-h-[80px]">
                  <TypewriterLog text={logMessage} />
                </div>

                <div className="space-y-3">
                   <p className="text-slate-300 text-sm">{t(`niche.${activeNiche}_desc`)}</p>
                   <div className="pt-4">
                     <button className="flex items-center gap-2 text-emerald-400 text-sm font-bold hover:gap-3 transition-all group-hover:text-emerald-300">
                       {t('niche.btn')} {t(`niche.${activeNiche}_title`)} <ArrowRight size={16} />
                     </button>
                   </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};