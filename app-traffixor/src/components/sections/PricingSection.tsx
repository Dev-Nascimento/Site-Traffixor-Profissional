import React from 'react';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export const PricingSection: React.FC = () => (
  <section id="pricing" className="py-24 relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos Escaláveis</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Escolha a infraestrutura ideal para a fase actual do seu negócio.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            name: 'Starter', 
            price: '297', 
            features: ['5.000 eventos/mês', 'Integração CRM Base', 'Suporte via Ticket', 'Dashboard Básico'],
            highlight: false 
          },
          { 
            name: 'Pro', 
            price: '497', 
            features: ['50.000 eventos/mês', 'Neural Engine v3.0', 'Automações Ilimitadas', 'Suporte Prioritário'],
            highlight: true 
          },
          { 
            name: 'Enterprise', 
            price: '997', 
            features: ['Eventos Ilimitados', 'API Customizada', 'Account Manager Dedicado', 'SLA de 99.9%'],
            highlight: false 
          }
        ].map((plan, i) => (
          <GlassCard key={i} glow={plan.highlight} className={`p-8 flex flex-col ${plan.highlight ? 'border-emerald-500/50 scale-105' : ''}`}>
            {plan.highlight && <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">Mais Popular</span>}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">R$ {plan.price}</span>
              <span className="text-slate-500 text-sm">/mês</span>
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
              Começar Agora
            </NeonButton>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);