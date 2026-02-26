import React from 'react';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AuthoritySection } from './components/sections/AuthoritySection'; 
import { ProblemSection } from './components/sections/ProblemSection';
import { NicheSolutionsSection } from './components/sections/NicheSolutionsSection';
import { ROISimulatorSection } from './components/sections/ROISimulatorSection';
import { PricingSection } from './components/sections/PricingSection';
import { Footer } from './components/sections/Footer';
import { NotFound } from './components/pages/NotFound';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { PracticalUseSection } from './components/sections/PracticalUseSection';
import { ResultsSection } from './components/sections/ResultsSection';
import { SetupPremiumSection } from './components/sections/SetupPremiumSection';
import { LeadCaptureSection } from './components/sections/LeadCaptureSection';
import { EbookLanding } from './components/pages/EbookLanding';

const App: React.FC = () => {
  const currentPath = window.location.pathname;

  // 1. O Interceptador de Rotas: 
  // Se for /login ou /404, mostra o terminal restrito.
  if (currentPath === '/login' || currentPath === '/404') {
    return <NotFound />;
  }

  // 2. Rota do Playbook:
  // Se o usuário acessar /guia-neural, carregamos APENAS a Landing Page do E-book.
  if (currentPath === '/guia-neural') {
    return <EbookLanding />;
  }

  // 3. Vitrine Principal (Home):
  // Se for qualquer outro caminho (como a "/" ), carrega o site completo.
  return (
    <div className="bg-[#09090E] min-h-screen text-white selection:bg-emerald-500/30 font-sans">
      <NeuralBackground />

      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />
          <AuthoritySection />
          <ProblemSection />
          <ComparisonSection />
          <NicheSolutionsSection />
          <ResultsSection />
          <PracticalUseSection />
          <ROISimulatorSection />
          <PricingSection />
          <SetupPremiumSection />
          <LeadCaptureSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;