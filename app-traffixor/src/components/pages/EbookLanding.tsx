import React, { useState } from 'react';
import { TraffixorLogo } from '../ui/TraffixorLogo';
import { NeonButton } from '../ui/NeonButton';

export const EbookLanding: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !email) {
      alert("Por favor, preencha todos os campos para receber o material.");
      return;
    }

    // Filtro rápido de formato de e-mail (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Formato de e-mail inválido. Verifique o que foi digitado.");
      return;
    }

    setIsSubmitting(true);

    try {
      // A PONTE: Substitua a URL abaixo pelo link que o Make gerou para você
      const MAKE_WEBHOOK_URL = "https://hook.us2.make.com/e259azoj0goxwijx3c9qixf53dcm8vb0";

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          origem: "Playbook_Neural_Traffixor",
          dataHora: new Date().toISOString()
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSuccess(true);
        console.log("LEAD ENVIADO PARA O MAKE COM SUCESSO!");
      } else {
        throw new Error("Falha na comunicação com a infraestrutura.");
      }

    } catch (error) {
      console.error("Erro no envio:", error);
      setIsSubmitting(false);
      alert("Ocorreu um erro no servidor. Tente novamente em alguns instantes.");
    }
  };

  return (
    <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-emerald-500/30">
      {/* Background Decorativo com Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <TraffixorLogo />
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Lado Esquerdo: Copy de Autoridade */}
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6">
            Engenharia Operacional B2B
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            PARE DE PERDER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              LUCRO PARA O CAOS.
            </span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
            Descubra como a <strong>Orquestração Neural</strong> elimina o trabalho manual e conecta sua mídia paga diretamente ao faturamento real.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Os 5 Fluxos de Ouro da automação avançada.",
              "Como treinar algoritmos de Ads com dados de lucro.",
              "A matemática real do ROI operacional."
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                  <svg 
                    className="w-3 h-3 text-emerald-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Lado Direito: Card de Captura Inteligente */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 transition duration-1000"></div>
          <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl min-h-[400px] flex flex-col justify-center">
            
            {!isSuccess ? (
              // ESTADO 1: FORMULÁRIO DE CAPTURA
              <div className="animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold mb-2">Acesso Restrito</h3>
                <p className="text-slate-500 text-sm mb-6">Enviaremos o documento oficial diretamente para o seu e-mail.</p>
                
                <form className="space-y-4" onSubmit={handleCapture}>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Seu Nome Completo" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail (Não use e-mail falso)" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-emerald-500 transition-colors" 
                      disabled={isSubmitting}
                    />
                  </div>

                  <NeonButton 
                    className="w-full py-4 justify-center text-lg mt-4" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Criptografando Dados...' : 'ENVIAR PLAYBOOK PARA MEU E-MAIL'}
                  </NeonButton>
                </form>
              </div>
            ) : (
              // ESTADO 2: TELA DE SUCESSO
              <div className="text-center animate-in zoom-in duration-500 py-8">
                <div className="w-20 h-20 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50">
                  <svg 
                    className="w-10 h-10 text-emerald-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">Acesso Liberado!</h3>
                <p className="text-slate-300 text-lg mb-4">
                  O Playbook Neural foi enviado para: <br/>
                  <span className="font-bold text-white">{email}</span>
                </p>
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg inline-block">
                  <p className="text-sm text-red-200">
                    <strong>Atenção:</strong> Verifique sua caixa de Spam ou Promoções. O link de acesso expira em breve.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
};