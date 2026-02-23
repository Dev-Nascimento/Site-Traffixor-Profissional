import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      nav: { solutions: "Soluções", simulator: "Simulador de ROI", pricing: "Preços", login: "Login", trial: "Começar Grátis" },
      hero: { badge: "MOTOR NEURAL V3.0 ATIVO", title: "Automação Avançada para Escalar Operações", subtitle: "A infraestrutura definitiva para o seu negócio. Elimine gargalos manuais, conecte seus dados em tempo real e acelere seu faturamento com inteligência artificial.", cta_primary: "Iniciar Automação", cta_secondary: "Ver Documentação" },
      authority: { events: "eventos/dia", latency: "latência", data: "Proteção de Dados", ready: "Pronto" },
      problem: { title: "Operações rodam em infraestrutura fragmentada", subtitle: "Sistemas desconectados criam atritos que matam a velocidade de crescimento.", card1_title: "Silos de Dados Impenetráveis", card1_desc: "Dados críticos de clientes presos em plataformas isoladas.", card2_title: "Processos Manuais Lentos", card2_desc: "Fluxos de receita que dependem de intervenção humana.", card3_title: "Stack Desconectado", card3_desc: "Uma colcha de retalhos de integrações que quebram silenciosamente." },
      niche: { title: "Arquitetura adaptável para o seu mercado", subtitle: "Funcionalidades construídas para resolver desafios específicos.", b2b_title: "B2B & SaaS", b2b_focus: "Eficiência de Pipeline", b2b_desc: "Qualifique leads complexos automaticamente e acelere ciclos de vendas longos.", b2c_title: "B2C & Varejo", b2c_focus: "Volume & Personalização", b2c_desc: "Recupere carrinhos em tempo real e hiper-personalize a jornada do cliente.", info_title: "Infoprodutores", info_focus: "Orquestração de Lançamentos", info_desc: "Automatize lançamentos de 6 e 7 dígitos. Integre Hotmart/Eduzz direto com sua área de membros.", btn: "Ver Documentação para", engine: "// Executando engine para", flow: "Fluxo otimizado pronto para escala." },
      roi: { title: "Neural ROI Simulator", subtitle: "Calcule o impacto financeiro da automação inteligente na sua operação e veja quanto a Traffixor pode escalar seu faturamento.", contacts: "Contatos Mensais", ticket: "Ticket Médio (R$)", conversion: "Taxa de Conversão Atual", btn_calc: "Calcular Projeção de Crescimento", result_title: "Aumento Anual Projetado", result_sub: "Com a qualificação e automação da Traffixor", btn_activate: "Ativar esse Crescimento Agora", empty: "Ajuste os parâmetros e veja a mágica dos dados acontecer." },
      pricing: { 
        title: "Planos Escaláveis", 
        subtitle: "Escolha a infraestrutura ideal para a fase atual do seu negócio.", 
        popular: "Mais Popular", 
        month: "/mês", 
        year: "/ano",
        monthly: "Mensal",
        annual: "Anual",
        save: "Economize 20%",
        btn_start: "Começar Agora" 
      },
      footer: { desc: "Orquestrando o futuro do marketing digital através de automação neural.", platform: "Plataforma", legal: "Legal", privacy: "Privacidade", terms: "Termos de Uso", rights: "Todos os direitos reservados." }
    }
  },
  en: {
    translation: {
      nav: { solutions: "Solutions", simulator: "ROI Simulator", pricing: "Pricing", login: "Login", trial: "Start Free Trial" },
      hero: { badge: "NEURAL ENGINE V3.0 ACTIVE", title: "Advanced Automation to Scale Operations", subtitle: "The ultimate infrastructure for your business. Eliminate manual bottlenecks, connect your data in real-time, and accelerate revenue with AI.", cta_primary: "Start Automation", cta_secondary: "View Documentation" },
      authority: { events: "events/day", latency: "latency", data: "Data Protection", ready: "Ready" },
      problem: { title: "Operations run on fragmented infrastructure", subtitle: "Disconnected systems create friction that kills growth velocity.", card1_title: "Impenetrable Data Silos", card1_desc: "Critical customer data trapped in isolated platforms.", card2_title: "Slow Manual Processes", card2_desc: "Revenue-critical workflows that depend on human intervention.", card3_title: "Disconnected Stack", card3_desc: "A patchwork of integrations that break silently." },
      niche: { title: "Adaptable architecture for your market", subtitle: "Features built to solve your specific operational challenges.", b2b_title: "B2B & SaaS", b2b_focus: "Pipeline Efficiency", b2b_desc: "Automatically qualify complex leads and accelerate long sales cycles.", b2c_title: "B2C & Retail", b2c_focus: "Volume & Personalization", b2c_desc: "Recover carts in real-time and hyper-personalize the customer journey.", info_title: "Digital Creators", info_focus: "Launch Orchestration", info_desc: "Automate 6 and 7-figure product launches. Integrate checkout platforms directly.", btn: "View Documentation for", engine: "// Running engine for", flow: "Optimized flow ready for scale." },
      roi: { title: "Neural ROI Simulator", subtitle: "Calculate the financial impact of intelligent automation and see how Traffixor can scale your revenue.", contacts: "Monthly Contacts", ticket: "Average Ticket ($)", conversion: "Current Conversion Rate", btn_calc: "Calculate Growth Projection", result_title: "Projected Annual Increase", result_sub: "With Traffixor's qualification and automation", btn_activate: "Activate This Growth Now", empty: "Adjust the parameters and watch the data magic happen." },
      pricing: { 
        title: "Scalable Plans", 
        subtitle: "Choose the ideal infrastructure for your current business stage.", 
        popular: "Most Popular", 
        month: "/month", 
        year: "/year",
        monthly: "Monthly",
        annual: "Annual",
        save: "Save 20%",
        btn_start: "Get Started" 
      },
      footer: { desc: "Orchestrating the future of digital marketing through neural automation.", platform: "Platform", legal: "Legal", privacy: "Privacy", terms: "Terms of Use", rights: "All rights reserved." }
    }
  },
  es: {
    translation: {
      nav: { solutions: "Soluciones", simulator: "Simulador de ROI", pricing: "Precios", login: "Iniciar Sesión", trial: "Prueba Gratis" },
      hero: { badge: "MOTOR NEURAL V3.0 ACTIVO", title: "Automatización Avanzada para Escalar", subtitle: "La infraestructura definitiva para tu negocio. Elimina cuellos de botella manuales, conecta tus datos y acelera tus ingresos.", cta_primary: "Iniciar Automatización", cta_secondary: "Ver Documentación" },
      authority: { events: "eventos/día", latency: "latencia", data: "Protección de Dados", ready: "Listo" },
      problem: { title: "Infraestructura fragmentada", subtitle: "Los sistemas desconectados crean fricción que frena el crecimiento.", card1_title: "Silos de Datos", card1_desc: "Datos críticos atrapados en plataformas aisladas.", card2_title: "Procesos Lentos", card2_desc: "Flujos de ingresos que dependen de intervención humana.", card3_title: "Stack Desconectado", card3_desc: "Un mosaico de integraciones que se rompen en silencio." },
      niche: { title: "Arquitectura adaptable", subtitle: "Funcionalidades construidas para resolver tus desafíos.", b2b_title: "B2B & SaaS", b2b_focus: "Eficiencia de Pipeline", b2b_desc: "Califica leads complejos automáticamente y acelera ciclos de ventas.", b2c_title: "B2C & Retail", b2c_focus: "Volumen y Personalización", b2c_desc: "Recupera carritos en tiempo real y personaliza el viaje del cliente.", info_title: "Infoproductores", info_focus: "Lanzamientos", info_desc: "Automatiza lanzamientos de 6 y 7 cifras. Integra plataformas de pago directo.", btn: "Ver Documentación para", engine: "// Ejecutando motor para", flow: "Flujo optimizado listo para escalar." },
      roi: { title: "Simulador de ROI Neural", subtitle: "Calcula el impacto financiero de la automatización inteligente en tu operación.", contacts: "Contactos Mensuales", ticket: "Ticket Promedio", conversion: "Tasa de Conversión", btn_calc: "Calcular Proyección", result_title: "Aumento Anual Proyectado", result_sub: "Con la automatización de Traffixor", btn_activate: "Activar Crecimiento Ahora", empty: "Ajusta los parámetros y mira la magia suceder." },
      pricing: { 
        title: "Planes Escalables", 
        subtitle: "Elige la infraestructura ideal para tu negocio.", 
        popular: "Más Popular", 
        month: "/mes", 
        year: "/año",
        monthly: "Mensual",
        annual: "Anual",
        save: "Ahorra 20%",
        btn_start: "Empezar Ahora" 
      },
      footer: { desc: "Orquestando el futuro del marketing digital a través de automatización neuronal.", platform: "Plataforma", legal: "Legal", privacy: "Privacidad", terms: "Términos de Uso", rights: "Todos los derechos reservados." }
    }
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({ resources, fallbackLng: 'pt', interpolation: { escapeValue: false } });
export default i18n;