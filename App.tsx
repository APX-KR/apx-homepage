
import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/home/HeroSection';
import ProblemSection from './components/home/ProblemSection';
import PhilosophySection from './components/home/PhilosophySection';
import FrameworkSection from './components/home/FrameworkSection';
import FunnelSection from './components/home/FunnelSection';
import ProcessSection from './components/home/ProcessSection';
import InteractiveSection from './components/home/InteractiveSection';
import PartnerSection from './components/home/PartnerSection';
import { ModalProvider } from './contexts/ModalContext';
import ContactModal from './components/common/ContactModal';

const App: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <ModalProvider>
      <div className="bg-white">
        <Header onMegaMenuToggle={setIsMegaMenuOpen} />
        <main className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isMegaMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
          <HeroSection />
          <ProblemSection />
          <PhilosophySection />
          <FrameworkSection />
          <FunnelSection />
          <ProcessSection />
          <InteractiveSection />
          <PartnerSection />
        </main>
        <Footer />
        <ContactModal />
      </div>
    </ModalProvider>
  );
};

export default App;
