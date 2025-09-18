import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LogosSection from './components/LogosSection';
import FeaturesSection from './components/FeaturesSection';
import LatestSection from './components/LatestSection';
import ServicesSection from './components/ServicesSection';
import CTA from './components/CTA';
import TestimonialsSection from './components/TestimonialsSection';
import ExploreSection from './components/ExploreSection';
import ArtEventsSection from './components/ArtEventsSection';
import JoinNowSection from './components/JoinNowSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <LatestSection />
      <ServicesSection />
      <CTA />
      <TestimonialsSection />
      <ExploreSection />
      <ArtEventsSection />
      <JoinNowSection />
      <Footer />
    </div>
  );
}

export default App;
