import React from 'react';
import { useTranslation } from 'react-i18next';

export const AuthoritySection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 border-y border-white/5 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div><p className="text-white font-medium text-sm">SOC 2 Type II</p><p className="text-slate-500 text-xs">{t('authority.ready')}</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div><p className="text-white font-medium text-sm">GDPR Compliant</p><p className="text-slate-500 text-xs">{t('authority.data')}</p></div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-8">
            <div className="text-center"><p className="text-2xl font-bold text-white">1M+</p><p className="text-slate-500 text-xs">{t('authority.events')}</p></div>
            <div className="text-center"><p className="text-2xl font-bold text-white">99.99%</p><p className="text-slate-500 text-xs">uptime SLA</p></div>
            <div className="text-center"><p className="text-2xl font-bold text-white">&lt;50ms</p><p className="text-slate-500 text-xs">{t('authority.latency')}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};