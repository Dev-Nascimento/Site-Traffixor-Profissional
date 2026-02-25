import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';
import { Check, Zap } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  // Começamos com o anual ativado (gatilho de ancoragem)
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      desc: "Para operações em fase de estruturação.",
      priceMonthly: 197,
      priceAnnual: 157, // ~20% off
      features: ["Até 5.000 leads orquestrados", "Integração CRM e Ads", "Follow-ups básicos", "Suporte via Email"],
      isPopular: false
    },
    {
      name: "Pro",
      badge: t('pricing.pro_badge'),
      desc: "A engine completa para escalar vendas.",
      priceMonthly: 497,
      priceAnnual: 397,
      features: ["Leads ilimitados", "Lead Scoring Inteligente", "Disparos Comportamentais (Abandonos)", "Rotas Condicionais Avançadas", "Suporte Prioritário WhatsApp"],
      isPopular: true
    },
    {
      name: "Enterprise",
      badge: t('pricing.enterprise_badge'),
      desc: "Infraestrutura dedicada para líderes.",
      priceMonthly: 1497,
      priceAnnual: 1197,
      features: ["Servidores Dedicados (Latência Zero)", "Consultoria de Setup Inclusa", "Gerente de Conta Exclusivo", "Integrações Customizadas via API", "SLA de 99.9% Garantido"],
      isPopular: false
    }
  ];

  return (
    <section className="py-24 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            {t('pricing.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle Mensal vs Anual */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
              {t('pricing.monthly')}
            </span>
            
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 transition-colors duration-300 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-emerald-500 transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
            </button>
            
            <div className="flex items-center gap-2">
              <span className={`text-sm ${isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>
                {t('pricing.annual')}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {t('pricing.save')}
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative ${plan.isPopular ? 'lg:-mt-8 lg:mb-8 z-10' : ''}`}>
              
              {/* Efeito de brilho no plano Pro */}
              {plan.isPopular && (
                <div className="absolute -inset-1 bg-gradient-to-b from-emerald-500/50 to-cyan-500/10 rounded-2xl blur opacity-50" />
              )}
              
              <GlassCard className={`p-8 relative h-full flex flex-col ${plan.isPopular ? 'border-emerald-500/50 ring-1 ring-emerald-500/30' : 'border-white/5'}`}>
                
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${plan.isPopular ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-slate-300 border border-slate-700'}`}>
                    {plan.isPopular && <Zap className="w-3 h-3 inline-block mr-1 -mt-0.5" />}
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-8 mt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400">{plan.desc}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-slate-400 text-2xl mb-1">R$</span>
                    <span className="text-5xl font-bold text-white">
                      {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-slate-400 mb-2">{t('pricing.month')}</span>
                  </div>
                  
                  {/* Ancoragem por Dia */}
                  <div className="text-xs font-mono text-emerald-400/80 bg-emerald-500/10 inline-block px-3 py-1 rounded-full">
                    {t('pricing.daily')} {Math.round((isAnnual ? plan.priceAnnual : plan.priceMonthly) / 30)} {t('pricing.daily_suffix')}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <NeonButton 
                  variant={plan.isPopular ? "primary" : "secondary"}
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/5500000000000?text=Ol%C3%A1%21+Quero+assinar+o+plano+${plan.name}+da+Traffixor.`, '_blank')}
                >
                  {t('pricing.btn_start')}
                </NeonButton>
              </GlassCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};