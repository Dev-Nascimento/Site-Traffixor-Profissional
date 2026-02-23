import React from 'react';

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string; glow?: boolean }> = ({ 
  children, 
  className = '',
  glow = false 
}) => (
  <div className={`
    relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl
    ${glow ? 'hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10' : ''}
    transition-all duration-300
    ${className}
  `}>
    {children}
  </div>
);