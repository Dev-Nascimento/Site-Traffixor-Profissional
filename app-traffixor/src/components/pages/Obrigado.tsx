import React, { useState, useEffect } from 'react';
import { TraffixorLogo } from '../ui/TraffixorLogo';

const Obrigado: React.FC = () => {
  const calendlyUrl = "https://calendly.com/luizclaudio-nascimento-rj/luiz-traffixor-diagnostico?hide_event_type_details=1&hide_gdpr_banner=1&background_color=060609&text_color=ffffff&primary_color=10b981";

  const [leadName, setLeadName] = useState('Empresário');
  
  // 🧠 O NOVO MOTOR NEURAL BLINDADO
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [auditFinished, setAuditFinished] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('traffixor_lead_name');
    if (savedName) setLeadName(savedName);
  }, []);

  const logsDaAuditoria = [
    `> [SISTEMA] Iniciando Auditoria Operacional Profunda: ${leadName}...`,
    "> [CONEXÃO] Estabelecendo ponte neural com canais de tráfego...",
    "> [SCANN] Analisando API de Conversões (Meta/Google Ads)...",
    "> [ALERT] Falha Crítica detectada no rastreamento de Mídia Paga.",
    "> [WARN] Vazamento de dados identificado no topo do funil.",
    "> [SCANN] Verificando roteamento de leads para CRM...",
    "> [ALERT] Latência operacional > 300 segundos. Alto risco de churn.",
    `> [NEURAL] Previsão de perda financeira para ${leadName} nos próximos 30 dias: ALTA.`,
    "> [STATUS] Diagnóstico Concluído. Estado: CRÍTICO.",
    "> [RECOMENDAÇÃO] Intervenção humana urgente via engenharia Traffixor.",
    "> [SISTEMA] Aguardando seleção de horário abaixo..."
  ];

  // A Lógica que impede o crash da tela
  useEffect(() => {
    if (currentLogIndex < logsDaAuditoria.length) {
      const timer = setTimeout(() => {
        setCurrentLogIndex(prev => prev + 1);
      }, 1100); // Velocidade de leitura
      return () => clearTimeout(timer);
    } else {
      setAuditFinished(true);
    }
  }, [currentLogIndex, logsDaAuditoria.length]);

  // Filtra apenas os logs que já devem aparecer na tela
  const visibleLogs = logsDaAuditoria.slice(0, currentLogIndex);

  return (
    <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-emerald-500/30 flex flex-col items-center justify-start relative overflow-hidden p-6 py-12 md:py-20">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        
        <div className="flex justify-center mb-16 md:mb-20 scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <TraffixorLogo />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Acesso Liberado com Sucesso
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
          NÃO FECHE ESTA PÁGINA AINDA.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            A NOSSA IA ESTÁ TRABALHANDO.
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          O Playbook Neural foi enviado. Enquanto isso, o nosso motor de engenharia iniciou uma auditoria automatizada básica na sua operação. <strong className="text-white">Veja o relatório em tempo real abaixo antes de agendar.</strong>
        </p>

        {/* --- 🧠 O TERMINAL DE AUDITORIA NEURAL --- */}
        <div className="bg-black border border-white/10 rounded-2xl w-full max-w-4xl mx-auto shadow-2xl relative overflow-hidden mb-16 font-mono p-6 text-left shadow-emerald-900/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-500 text-xs tracking-widest uppercase">traffixor_neural_audit_v4.1.sys</span>
            </div>
            
            <div className="space-y-2.5 h-[320px] overflow-y-auto text-sm">
                {visibleLogs.map((log, index) => {
                    // A TRAVA DE SEGURANÇA: O símbolo "?" garante que não vai quebrar se a linha vier vazia
                    const isError = log?.includes('ALERT') || log?.includes('CRÍTICO') || log?.includes('Falha');
                    const isWarning = log?.includes('WARN');
                    
                    return (
                        <p key={index} className={`
                            animate-in fade-in slide-in-from-bottom-1 duration-300
                            ${isError ? 'text-red-400' : isWarning ? 'text-yellow-300' : 'text-emerald-400'}
                        `}>
                            {log}
                            {index === visibleLogs.length - 1 && !auditFinished && (
                                <span className="animate-pulse ml-1">_</span>
                            )}
                        </p>
                    );
                })}
            </div>

            {!auditFinished && (
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
            )}
        </div>

        {/* --- 📅 O TERMINAL DE AGENDAMENTO --- */}
        <div className={`
            bg-black/40 border border-white/10 rounded-3xl w-full mx-auto backdrop-blur-sm shadow-2xl relative overflow-hidden mb-16 transition-all duration-1000
            ${auditFinished ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none h-0'}
        `}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            
            <div className="p-8 md:p-10 text-center border-b border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Engenharia Operacional Aplicada</h3>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Selecione um horário na agenda abaixo para uma Sessão de Diagnóstico gratuita. Nosso sistema já sincronizou a disponibilidade do nosso engenheiro chefe.
                </p>
            </div>

            <div className="w-full h-[700px] sm:h-[650px] bg-transparent">
                <iframe 
                    src={calendlyUrl} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    title="Agendamento Traffixor"
                    className="bg-transparent"
                ></iframe>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Obrigado;