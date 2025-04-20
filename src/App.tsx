import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import VisualSection from './components/VisualSection';
import SpeciesSection from './components/SpeciesSection';
import Footer from './components/Footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Global animation settings
    gsap.config({
      autoSleep: 60,
      force3D: true,
    });
    
    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <VisualSection />
        <SpeciesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;