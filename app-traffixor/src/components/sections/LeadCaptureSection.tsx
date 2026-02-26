import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { NeonButton } from '../ui/NeonButton';

export const LeadCaptureSection: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 relative overflow-hidden bg-[#060609]">
      {/* Glows que você curtiu na Landing Page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
          PRONTO PARA <span className="text-emerald-400">ORQUESTRAR</span> SUA ESCALA?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Deixe seus dados para uma análise de viabilidade técnica. Nossa engenharia entrará em contato para desenhar seu Setup Premium.
        </p>

        <GlassCard className="p-8 md:p-12">
          <form className="grid md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Seu Nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all" 
            />
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-all" 
            />
            <NeonButton className="h-full">
              AGENDAR DIAGNÓSTICO
            </NeonButton>
          </form>
          <p className="text-[10px] text-slate-500 mt-6 italic">
            *Ao enviar, você autoriza a Traffixor a processar seus dados para fins de consultoria técnica.
          </p>
        </GlassCard>
      </div>
    </section>
  );
};