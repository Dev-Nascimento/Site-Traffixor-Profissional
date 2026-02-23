import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    { name: 'Starter', price: 297, features: ['5.000 eventos', 'Integração CRM', 'Suporte Ticket', 'Dashboard'], highlight: false },
    { name: 'Pro', price: 497, features: ['50.000 eventos', 'Neural Engine v3.0', 'Automações Ilimitadas', 'Suporte VIP'], highlight: true },
    { name: 'Enterprise', price: 997, features: ['Ilimitado', 'API Customizada', 'Account Manager', 'SLA 99.9%'], highlight: false }
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>{t('pricing.monthly')}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
            >
              <div className={`w-5 h-5 bg-emerald-500 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-slate-500'}`}>
              {t('pricing.annual')} 
              <span className="ml-2 px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">
                -20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => {
            // Cálculo do preço: Se anual, aplica desconto de ~2 meses (20%) e multiplica por 12
            const displayPrice = isAnnual 
              ? Math.floor(plan.price * 0.8 * 12) 
              : plan.price;

            return (
              <GlassCard key={i} glow={plan.highlight} className={`p-8 flex flex-col transition-all duration-500 ${plan.highlight ? 'border-emerald-500/50 scale-105 z-10' : ''}`}>
                {plan.highlight && <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">{t('pricing.popular')}</span>}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold transition-all">
                    R$ {displayPrice.toLocaleString()}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {isAnnual ? t('pricing.year') : t('pricing.month')}
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <NeonButton variant={plan.highlight ? 'primary' : 'secondary'} className="w-full">
                  {t('pricing.btn_start')}
                </NeonButton>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};