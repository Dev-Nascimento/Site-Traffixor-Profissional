import React from 'react';

export const NeonButton: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, disabled }) => {
  const baseStyles = 'relative px-6 py-3 rounded-lg font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden group';
  
  const variants = {
    // Primary: Estética Esmeralda com Overglow
    primary: `bg-emerald-500 text-black hover:bg-emerald-400 
              shadow-[0_0_15px_rgba(16,185,129,0.3)] 
              hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] 
              active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`,
    
    // Secondary: Estética Vidromorfismo Cibernético
    secondary: `bg-white/5 text-white border border-white/10 
                hover:border-cyan-500/50 hover:text-cyan-400 
                hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] 
                active:scale-[0.98] disabled:opacity-50`,
    
    ghost: `text-slate-400 hover:text-white active:scale-[0.98] disabled:opacity-50`
  };

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Camada de Brilho Interno (Glow) */}
      {variant === 'primary' && !disabled && (
        <>
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
          <span className="absolute inset-0 rounded-lg bg-emerald-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}

      {/* Texto/Ícone */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};