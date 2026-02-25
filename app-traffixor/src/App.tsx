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
import { NotFound } from './components/pages/NotFound'; // 1. Nossa nova tela importada aqui!
import { ComparisonSection } from './components/sections/ComparisonSection';
import { PracticalUseSection } from './components/sections/PracticalUseSection';
import { ResultsSection } from './components/sections/ResultsSection';

const App: React.FC = () => {
  // 2. O Interceptador: Se a URL for /login ou /404, ele trava e mostra o terminal restrito.
  const currentPath = window.location.pathname;
  if (currentPath === '/login' || currentPath === '/404') {
    return <NotFound />;
  }

  // 3. Se for a URL normal (/), o site carrega a vitrine completa.
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
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;