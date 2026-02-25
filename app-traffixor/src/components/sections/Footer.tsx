import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-[#09090E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-4">
              TRAFFIXOR
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">{t('nav.solutions')}</a></li>
              <li><a href="#roi-calc" className="hover:text-emerald-400 transition-colors">{t('nav.simulator')}</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">{t('nav.pricing')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="https://charming-zydeco-20a.notion.site/Traffixor-Pol-ticas-de-Privacidade-31204384349f807aa8bed99c8ea5a5b5?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Políticas de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://charming-zydeco-20a.notion.site/Traffixor-Termos-de-Uso-31204384349f800389b5db19f6a1ed99?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex justify-between items-center text-xs text-slate-600">
          <p>© 2026 Traffixor Automation. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};