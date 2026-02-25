import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';
import { Rocket, CheckCircle2 } from 'lucide-react';

export const SetupPremiumSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('setup.feat1'),
    t('setup.feat2'),
    t('setup.feat3'),
    t('setup.feat4'),
  ];

  return (
    <section className="pb-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden border-emerald-500/40 ring-1 ring-emerald-500/20">
          
          {/* Efeito de brilho de fundo VIP */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Lado Esquerdo: A Dor e a Oferta */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider mb-6">
                <Rocket className="w-4 h-4" />
                {t('setup.badge')}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {t('setup.title')}
              </h3>
              
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {t('setup.subtitle')}
              </p>

              <div className="text-2xl font-mono text-emerald-400 font-bold mb-8">
                {t('setup.price')}
              </div>
              
              <NeonButton 
                variant="primary" 
                className="w-full sm:w-auto"
                // Direto pro WhatsApp focado no High-Ticket
                onClick={() => window.open('https://wa.me/5521984834409?text=Ol%C3%A1%21+Tenho+interesse+no+Setup+Premium+Done-For-You+da+Traffixor.', '_blank')}
              >
                {t('setup.cta')}
              </NeonButton>
            </div>

            {/* Lado Direito: Os Entregáveis */}
            <div className="bg-black/40 rounded-xl p-6 md:p-8 border border-white/5">
              <h4 className="text-white font-bold mb-6 text-lg">O que está incluso no escopo:</h4>
              <ul className="space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
};