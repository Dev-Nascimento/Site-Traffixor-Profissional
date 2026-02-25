import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 1. O tradutor entra aqui
import { NeonButton } from '../ui/NeonButton';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // 2. Ligamos o motor de tradução
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função que muda o idioma na hora
  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  // 3. Traduzindo os links usando as chaves do dicionário
  const navLinks = [
    { label: t('nav.platform', 'Plataforma'), href: '#platform', isExternal: false },
    { label: t('nav.solutions', 'Soluções'), href: '#solutions', isExternal: false },
    { label: t('nav.pricing', 'Preços'), href: '#pricing', isExternal: false },
    // Adicionamos a flag isExternal e o link do Notion aqui!
    { label: t('nav.docs', 'Docs'), href: 'https://global-author-a12.notion.site/Traffixor-Docs-Motor-Neural-v3-0-300dbf1cb64280bf8c66e21273cf89aa', isExternal: true }
  ];

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            TRAFFIXOR
          </span>
        </a>

        {/* Links do Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              // Se for externo (Docs), abre em nova aba. Se não, abre normal na mesma aba.
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : ""}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações do Desktop: Seletor de Idioma + Botões */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* A CAIXINHA DE IDIOMAS ENTROU AQUI */}
          <select 
            onChange={changeLanguage} 
            value={i18n.resolvedLanguage}
            className="bg-white/5 border border-white/10 text-slate-300 text-sm rounded-md px-2 py-2 outline-none focus:border-emerald-500 cursor-pointer"
          >
            <option value="pt" className="bg-[#09090E]">🇧🇷 PT</option>
            <option value="en" className="bg-[#09090E]">🇺🇸 EN</option>
            <option value="es" className="bg-[#09090E]">🇪🇸 ES</option>
          </select>

          <NeonButton variant="ghost" onClick={() => window.location.href = '/login'}>
            {t('nav.login', 'Login')}
          </NeonButton>

          <NeonButton onClick={() => window.open('https://wa.me/5521984834409?text=Ol%C3%A1%21+Quero+começar+a+minha+automação+com+a+Traffixor%C3%A7%C3%A3o.', '_blank')}>
            {t('nav.trial', 'Começar Grátis')}
          </NeonButton>
        </div>

        {/* Botão Hambúrguer do Mobile */}
        <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Menu Mobile Aberto */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="px-6 py-4 space-y-4">
            
            {/* O SELETOR DE IDIOMAS TAMBÉM APARECE NO CELULAR */}
            <div className="pb-4 border-b border-white/10">
              <select 
                onChange={changeLanguage} 
                value={i18n.resolvedLanguage}
                className="w-full bg-white/5 border border-white/10 text-slate-300 text-sm rounded-md px-3 py-2 outline-none focus:border-emerald-500 cursor-pointer"
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
                target={link.isExternal ? "_blank" : "_self"}
                rel={link.isExternal ? "noopener noreferrer" : ""}
                className="block text-slate-400 hover:text-white transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <NeonButton variant="secondary" className="w-full">{t('nav.login', 'Login')}</NeonButton>
              <NeonButton className="w-full">{t('nav.trial', 'Começar Grátis')}</NeonButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};