import React from 'react';

export const TraffixorLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className} group select-none`}>
      <style>{`
        /* Animação principal de "fatiamento" agressivo */
        @keyframes glitch-aggressive {
          0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); transform: translate(0, 0); opacity: 1; }
          2% { clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%); transform: translate(-5px, 0); }
          6% { clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%); transform: translate(5px, 0); }
          8% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0, 0); opacity: 0; }
          10% { clip-path: polygon(0 10%, 100% 10%, 100% 80%, 0 80%); transform: translate(-2px, 0); opacity: 1; }
          13% { clip-path: polygon(0 10%, 100% 10%, 100% 80%, 0 80%); transform: translate(2px, 0); }
          20% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0, 0); opacity: 0; }
          31% { clip-path: polygon(0 59%, 100% 59%, 100% 93%, 0 93%); transform: translate(5px, 0); opacity: 1; }
          35% { clip-path: polygon(0 65%, 100% 65%, 100% 76%, 0 76%); transform: translate(-5px, 0); }
          40% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0, 0); opacity: 0; }
          55% { clip-path: polygon(0 2%, 100% 2%, 100% 46%, 0 46%); transform: translate(0, 0); opacity: 1; }
          60% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); transform: translate(0, 0); opacity: 0; }
          73% { clip-path: polygon(0 36%, 100% 36%, 100% 55%, 0 55%); transform: translate(-5px, 0); opacity: 1; }
          77% { clip-path: polygon(0 42%, 100% 42%, 100% 84%, 0 84%); transform: translate(5px, 0); }
          80% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0, 0); opacity: 0; }
          100% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); transform: translate(0, 0); opacity: 1; }
        }

        /* Pequenos tremidos ocasionais no texto base */
        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          20% { transform: skew(0deg); }
          22% { transform: skew(5deg); }
          24% { transform: skew(0deg); }
          80% { transform: skew(0deg); }
          82% { transform: skew(-5deg); }
          84% { transform: skew(0deg); }
        }

        .glitch-wrapper {
          position: relative;
          display: inline-block;
          color: #10B981; /* Cor base Esmeralda */
          animation: glitch-skew 4s infinite linear;
        }

        /* Camadas de Fatiamento Ciano e Magenta */
        .glitch-wrapper::before,
        .glitch-wrapper::after {
          content: 'XOR';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          opacity: 0.8;
          z-index: -1;
        }

        /* Efeito Ciano (desloca para esquerda e fatia) */
        .glitch-wrapper::before {
          color: #0ff;
          animation: glitch-aggressive 2s infinite linear alternate-reverse;
          margin-left: -2px;
        }

        /* Efeito Magenta (desloca para direita e fatia diferente) */
        .glitch-wrapper::after {
          color: #f0f;
          animation: glitch-aggressive 1.5s infinite linear reverse;
          margin-left: 2px;
        }
      `}</style>

      {/* Ícone Hexagonal Neural (Sem alterações aqui) */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full" />
        <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 overflow-visible">
          <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="#10B981" strokeWidth="6" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="14" fill="#060609" stroke="#34D399" strokeWidth="2" />
          <circle cx="50" cy="50" r="6" fill="#10B981">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <g stroke="#10B981" strokeWidth="2" opacity="0.6">
            <line x1="50" y1="5" x2="50" y2="30" />
            <line x1="90" y1="25" x2="70" y2="35" />
            <line x1="90" y1="75" x2="70" y2="65" />
            <line x1="50" y1="95" x2="50" y2="70" />
            <line x1="10" y1="75" x2="30" y2="65" />
            <line x1="10" y1="25" x2="30" y2="35" />
          </g>
        </svg>
      </div>

      {/* Tipografia com o Glitch Agressivo Corrigido */}
      <div className="flex flex-col -space-y-1">
        <div className="text-2xl font-black tracking-tighter text-white flex items-center">
          <span className="leading-none">TRAFFI</span>
          {/* Wrapper que aplica o efeito */}
          <span className="glitch-wrapper ml-1 leading-none relative z-10">XOR</span>
        </div>
        <div className="text-[9px] font-mono text-emerald-500/50 tracking-[0.4em] uppercase leading-none mt-1">
          Neural Systems
        </div>
      </div>
    </div>
  );
};