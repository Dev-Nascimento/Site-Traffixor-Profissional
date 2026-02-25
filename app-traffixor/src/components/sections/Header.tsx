import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NeonButton } from '../ui/NeonButton';
import { TraffixorLogo } from '../ui/TraffixorLogo'; // 1. Componente de marca importado

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const navLinks = [
    { label: t('nav.platform', 'Plataforma'), href: '#platform', isExternal: false },
    { label: t('nav.solutions', 'Soluções'), href: '#solutions', isExternal: false },
    { label: t('nav.pricing', 'Preços'), href: '#pricing', isExternal: false },
    { label: t('nav.docs', 'Docs'), href: 'https://global-author-a12.notion.site/Traffixor-Docs-Motor-Neural-v3-0-300dbf1cb64280bf8c66e21273cf89aa', isExternal: true }
  ];

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - Substituído pelo Componente Imponente */}
        <a href="#" className="flex items-center transition-transform hover:scale-105 active:scale-95">
          <TraffixorLogo />
        </a>

        {/* Links do Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : ""}
              className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações: Seletor + Botões */}
        <div className="hidden md:flex items-center gap-4">
          <select 
            onChange={changeLanguage} 
            value={i18n.resolvedLanguage}
            className="bg-white/5 border border-white/10 text-slate-300 text-xs rounded-md px-2 py-1.5 outline-none focus:border-emerald-500 cursor-pointer hover:bg-white/10 transition-colors"
          >
            <option value="pt" className="bg-[#09090E]">🇧🇷 PT</option>
            <option value="en" className="bg-[#09090E]">🇺🇸 EN</option>
            <option value="es" className="bg-[#09090E]">🇪🇸 ES</option>
          </select>

          <NeonButton variant="ghost" className="text-sm" onClick={() => window.location.href = '/login'}>
            {t('nav.login', 'Login')}
          </NeonButton>

          <NeonButton onClick={() => window.open('https://wa.me/5521984834409?text=Ol%C3%A1%21+Quero+começar+a+minha+automação+com+a+Traffixor%C3%A7%C3%A3o.', '_blank')}>
            {t('nav.trial', 'Começar Grátis')}
          </NeonButton>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <button className="md:hidden p-2 text-emerald-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="px-6 py-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Region / Language</span>
              <select 
                onChange={changeLanguage} 
                value={i18n.resolvedLanguage}
                className="bg-white/5 border border-white/10 text-slate-300 text-sm rounded-md px-3 py-2 outline-none"
              >
                <option value="pt" className="bg-[#09090E]">🇧🇷 Português</option>
                <option value="en" className="bg-[#09090E]">🇺🇸 English</option>
                <option value="es" className="bg-[#09090E]">🇪🇸 Español</option>
              </select>
            </div>

            {navLinks.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                className="block text-lg font-medium text-slate-300 hover:text-emerald-400" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 grid grid-cols-1 gap-4">
              <NeonButton variant="secondary" className="w-full justify-center">{t('nav.login', 'Login')}</NeonButton>
              <NeonButton className="w-full justify-center">{t('nav.trial', 'Começar Grátis')}</NeonButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};