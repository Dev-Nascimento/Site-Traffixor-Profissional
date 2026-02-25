import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      nav: { solutions: "Soluções", simulator: "Simulador de ROI", pricing: "Preços", login: "Login", trial: "Começar Grátis" },
      hero: { 
        badge: "O FIM DOS SISTEMAS DESCONECTADOS", 
        title: "Transforme Dados em Receita com Automação Neural.", 
        subtitle: "Integre marketing, CRM e funis em uma única engine inteligente que aumenta sua conversão, reduz o CAC e acelera o faturamento.", 
        enemy: "> Planilhas e integrações quebradas estão drenando seu lucro agora mesmo.",
        cta_primary: "Iniciar Automação", 
        cta_secondary: "Calcular Meu ROI" 
      },
      authority: { events: "eventos/dia", latency: "latência", data: "Proteção de Dados", ready: "Pronto" },
      problem: { title: "Operações rodam em infraestrutura fragmentada", subtitle: "Sistemas desconectados criam atritos que matam a velocidade de crescimento.", card1_title: "Silos de Dados Impenetráveis", card1_desc: "Dados críticos de clientes presos em plataformas isoladas.", card2_title: "Processos Manuais Lentos", card2_desc: "Fluxos de receita que dependem de intervenção humana.", card3_title: "Stack Desconectado", card3_desc: "Uma colcha de retalhos de integrações que quebram silenciosamente." },
      comparison: {
        title: "Traffixor vs Ferramentas Tradicionais",
        subtitle: "Por que os líderes de mercado estão abandonando os 'remendos' e migrando para uma infraestrutura neural unificada.",
        traditional: "Ferramentas Comuns",
        traffixor: "Traffixor",
        row1_bad: "Integrações frágeis que quebram",
        row1_good: "Engine neural unificada e resiliente",
        row2_bad: "Workflows manuais e engessados",
        row2_good: "Automação inteligente de ponta a ponta",
        row3_bad: "Dados fragmentados em silos",
        row3_good: "Orquestração de dados em tempo real"
      },
      niche: { title: "Arquitetura adaptável para o seu mercado", subtitle: "Funcionalidades construídas para resolver desafios específicos.", b2b_title: "B2B & SaaS", b2b_focus: "Eficiência de Pipeline", b2b_desc: "Qualifique leads complexos automaticamente e acelere ciclos de vendas longos.", b2c_title: "B2C & Varejo", b2c_focus: "Volume & Personalização", b2c_desc: "Recupere carrinhos em tempo real e hiper-personalize a jornada do cliente.", info_title: "Infoprodutores", info_focus: "Orquestração de Lançamentos", info_desc: "Automatize lançamentos de 6 e 7 dígitos. Integre Hotmart/Eduzz direto com sua área de membros.", btn: "Ver Documentação para", engine: "// Executando engine para", flow: "Fluxo otimizado pronto para escala." },
      roi: { 
        title: "Descubra quanto dinheiro você está perdendo.", 
        subtitle: "Ajuste os números da sua operação atual e veja o tamanho do vazamento de lucro que a falta de orquestração inteligente está causando.", 
        contacts: "Leads/Contatos por mês", 
        ticket: "Ticket Médio (R$)", 
        conversion: "Taxa de Conversão Atual", 
        btn_calc: "Revelar Lucro Oculto", 
        result_title: "Você está deixando na mesa aproximadamente:", 
        result_sub: "Isso representa uma perda anual projetada por depender de procesos manuais e integrações frágeis.", 
        btn_activate: "Estancar Sangramento Financeiro", 
        empty: "Configure os números ao lado para calcular o tamanho do seu prejuízo invisível." 
      },
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
      hero: { 
        badge: "THE END OF DISCONNECTED SYSTEMS", 
        title: "Turn Data into Revenue with Neural Automation.", 
        subtitle: "Integrate marketing, CRM, and funnels into a single intelligent engine that increases conversion, reduces CAC, and accelerates revenue.", 
        enemy: "> Broken spreadsheets and integrations are draining your profits right now.",
        cta_primary: "Start Automation", 
        cta_secondary: "Calculate My ROI" 
      },
      authority: { events: "events/day", latency: "latency", data: "Data Protection", ready: "Ready" },
      problem: { title: "Operations run on fragmented infrastructure", subtitle: "Disconnected systems create friction that kills growth velocity.", card1_title: "Impenetrable Data Silos", card1_desc: "Critical customer data trapped in isolated platforms.", card2_title: "Slow Manual Processes", card2_desc: "Revenue-critical workflows that depend on human intervention.", card3_title: "Disconnected Stack", card3_desc: "A patchwork of integrations that break silently." },
      comparison: {
        title: "Traffixor vs Traditional Tools",
        subtitle: "Why market leaders are abandoning 'patches' and migrating to a unified neural infrastructure.",
        traditional: "Common Tools",
        traffixor: "Traffixor",
        row1_bad: "Fragile integrations that break",
        row1_good: "Unified and resilient neural engine",
        row2_bad: "Rigid and manual workflows",
        row2_good: "End-to-end intelligent automation",
        row3_bad: "Data fragmented in silos",
        row3_good: "Real-time data orchestration"
      },
      niche: { title: "Adaptable architecture for your market", subtitle: "Features built to solve your specific operational challenges.", b2b_title: "B2B & SaaS", b2b_focus: "Pipeline Efficiency", b2b_desc: "Automatically qualify complex leads and accelerate long sales cycles.", b2c_title: "B2C & Retail", b2c_focus: "Volume & Personalization", b2c_desc: "Recover carts in real-time and hyper-personalize the customer journey.", info_title: "Digital Creators", info_focus: "Launch Orchestration", info_desc: "Automate 6 and 7-figure product launches. Integrate checkout platforms directly.", btn: "View Documentation for", engine: "// Running engine for", flow: "Optimized flow ready for scale." },
      roi: { 
        title: "Discover how much money you are losing.", 
        subtitle: "Adjust your current operation numbers and see the size of the profit leak caused by the lack of intelligent orchestration.", 
        contacts: "Leads/Contacts per month", 
        ticket: "Average Ticket ($)", 
        conversion: "Current Conversion Rate", 
        btn_calc: "Reveal Hidden Profit", 
        result_title: "You are leaving on the table approximately:", 
        result_sub: "This represents a projected annual loss for relying on manual processes and fragile integrations.", 
        btn_activate: "Stop Financial Bleeding", 
        empty: "Configure the numbers to calculate the size of your invisible loss." 
      },
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
      hero: { 
        badge: "EL FIN DE LOS SISTEMAS DESCONECTADOS", 
        title: "Transforma Datos en Ingresos con Automatización Neuronal.", 
        subtitle: "Integra marketing, CRM y embudos en un solo motor inteligente que aumenta tu conversión, reduce el CAC y acelera la facturación.", 
        enemy: "> Las hojas de cálculo e integraciones rotas están drenando tus ganancias ahora mismo.",
        cta_primary: "Iniciar Automatización", 
        cta_secondary: "Calcular Mi ROI" 
      },
      authority: { events: "eventos/día", latency: "latencia", data: "Protección de Dados", ready: "Listo" },
      problem: { title: "Infraestructura fragmentada", subtitle: "Los sistemas desconectados crean fricción que frena el crecimiento.", card1_title: "Silos de Datos", card1_desc: "Datos críticos atrapados en plataformas aisladas.", card2_title: "Procesos Lentos", card2_desc: "Flujos de ingresos que dependen de intervención humana.", card3_title: "Stack Desconectado", card3_desc: "Un mosaico de integraciones que se rompen en silencio." },
      comparison: {
        title: "Traffixor vs Herramientas Tradicionales",
        subtitle: "Por qué los líderes del mercado están abandonando los 'parches' y migrando a una infraestructura neuronal unificada.",
        traditional: "Herramientas Comunes",
        traffixor: "Traffixor",
        row1_bad: "Integraciones frágiles que se rompen",
        row1_good: "Motor neuronal unificado y resistente",
        row2_bad: "Flujos de trabajo manuales y rígidos",
        row2_good: "Automatización inteligente de extremo a extremo",
        row3_bad: "Datos fragmentados en silos",
        row3_good: "Orquestación de datos en tiempo real"
      },
      niche: { title: "Arquitectura adaptable", subtitle: "Funcionalidades construidas para resolver tus desafíos.", b2b_title: "B2B & SaaS", b2b_focus: "Eficiencia de Pipeline", b2b_desc: "Califica leads complejos automáticamente y acelera ciclos de ventas.", b2c_title: "B2C & Retail", b2c_focus: "Volumen y Personalización", b2c_desc: "Recupera carritos en tiempo real y personaliza el viaje del cliente.", info_title: "Infoproductores", info_focus: "Lanzamientos", info_desc: "Automatiza lanzamientos de 6 y 7 cifras. Integra plataformas de pago directo.", btn: "Ver Documentación para", engine: "// Ejecutando motor para", flow: "Flujo optimizado listo para escalar." },
      roi: { 
        title: "Descubre cuánto dinero estás perdiendo.", 
        subtitle: "Ajusta los números de tu operación actual y mira el tamaño de la fuga de ganancias causada por la falta de orquestación inteligente.", 
        contacts: "Leads/Contactos por mes", 
        ticket: "Ticket Promedio", 
        conversion: "Tasa de Conversión Actual", 
        btn_calc: "Revelar Beneficio Oculto", 
        result_title: "Estás dejando en la mesa aproximadamente:", 
        result_sub: "Esto representa una pérdida anual proyectada por depender de procesos manuales e integraciones frágiles.", 
        btn_activate: "Detener Sangrado Financiero", 
        empty: "Configura los números para calcular el tamaño de tu pérdida invisible." 
      },
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