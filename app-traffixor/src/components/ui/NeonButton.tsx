import React from 'react';

export const NeonButton: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, variant = 'primary', className = '', onClick, disabled }) => {
  const baseStyles = 'relative px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: `bg-emerald-500 text-black font-semibold hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 disabled:opacity-50`,
    secondary: `bg-white/5 text-white border border-white/20 hover:border-cyan-500/50 hover:text-cyan-400 active:scale-95 disabled:opacity-50`,
    ghost: `text-slate-400 hover:text-white active:scale-95 disabled:opacity-50`
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {variant === 'primary' && !disabled && (
        <span className="absolute inset-0 rounded-lg bg-emerald-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
      )}
      <span className="relative">{children}</span>
    </button>
  );
};