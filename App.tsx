
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import PremiumShowcase from './components/PremiumShowcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Benefits />
        <PremiumShowcase />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
