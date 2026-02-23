import React from 'react';
import { NeuralBackground } from './components/ui/NeuralBackground';
import { Header } from './components/sections/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AuthoritySection } from './components/sections/AuthoritySection'; 
import { ProblemSection } from './components/sections/ProblemSection';
import { NicheSolutionsSection } from './components/sections/NicheSolutionsSection';
import { ROISimulatorSection } from './components/sections/ROISimulatorSection';
import { PricingSection } from './components/sections/PricingSection'; // Nova Peça
import { Footer } from './components/sections/Footer';                 // Nova Peça

const App: React.FC = () => {
  return (
    <div className="bg-[#09090E] min-h-screen text-white selection:bg-emerald-500/30 font-sans">
      <NeuralBackground />

      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />
          <AuthoritySection />
          <ProblemSection />
          <NicheSolutionsSection />
          <ROISimulatorSection />
          <PricingSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;