import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Send } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const LeadCaptureSection: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Futuramente, plugar webhook do Make/Zapier ou API de email marketing aqui
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative z-10 bg-[#060609]">
      <div className="max-w-4xl mx-auto px-6">
        <GlassCard className="p-8 md:p-12 relative overflow-hidden border-emerald-500/20 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider mb-6">
            <BookOpen className="w-4 h-4" />
            {t('leadmagnet.badge')}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t('leadmagnet.title')}
          </h3>
          
          <p className="text-slate-400 text-base mb-8 max-w-2xl mx-auto">
            {t('leadmagnet.subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative z-10">
            <input
              type="email"
              required
              placeholder={t('leadmagnet.placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap group"
            >
              {isSubmitted ? 'Enviado!' : t('leadmagnet.button')}
              {!isSubmitted && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {isSubmitted && (
            <p className="text-emerald-400 text-sm mt-4 font-medium animate-pulse">
              Playbook enviado para o seu e-mail com sucesso!
            </p>
          )}

          <p className="text-slate-600 text-xs mt-6">
            {t('leadmagnet.disclaimer')}
          </p>

        </GlassCard>
      </div>
    </section>
  );
};