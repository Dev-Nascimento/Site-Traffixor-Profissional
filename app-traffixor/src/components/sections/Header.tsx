import React, { useState, useEffect } from 'react';
import { NeonButton } from '../ui/NeonButton';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' }
  ];

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}
    `}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <NeonButton variant="ghost">Login</NeonButton>
          <NeonButton>Start Free Trial</NeonButton>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="block text-slate-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <NeonButton variant="secondary" className="w-full">Login</NeonButton>
              <NeonButton className="w-full">Start Free Trial</NeonButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};