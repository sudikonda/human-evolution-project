import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { speciesData } from '../data/evolutionData';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

const SpeciesSection: React.FC = () => {
  const [activeSpecies, setActiveSpecies] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [infoVisible, setInfoVisible] = useState(false);

  // Go to next species in the carousel
  const nextSpecies = () => {
    setActiveSpecies((prev) => (prev + 1) % speciesData.length);
  };

  // Go to previous species in the carousel
  const prevSpecies = () => {
    setActiveSpecies((prev) => (prev - 1 + speciesData.length) % speciesData.length);
  };

  // Toggle info panel
  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current && containerRef.current) {
      // Animate section on scroll
      gsap.from(containerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      });
    }
    
    // Animate carousel on species change
    if (cardsRef.current) {
      gsap.to(cardsRef.current, {
        x: `-${activeSpecies * 100}%`,
        duration: 0.8,
        ease: "power2.out"
      });
    }
    
    // Animate info panel
    if (infoRef.current) {
      gsap.to(infoRef.current, {
        x: infoVisible ? '0%' : '100%',
        opacity: infoVisible ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }, [activeSpecies, infoVisible]);

  const currentSpecies = speciesData[activeSpecies];

  return (
    <section 
      id="species" 
      ref={sectionRef}
      className="py-24 bg-stone-100"
    >
      <div className="container-custom" ref={containerRef}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Human Ancestor Species
          </h2>
          <p className="text-lg text-stone-600">
            Explore the different species that make up our evolutionary lineage.
          </p>
        </div>
        
        {/* Species Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
          <div 
            ref={cardsRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ width: `${speciesData.length * 100}%` }}
          >
            {speciesData.map((species) => (
              <div 
                key={species.id}
                className="w-full" 
                style={{ width: `${100 / speciesData.length}%` }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                    <img 
                      src={species.image} 
                      alt={species.name} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold mb-2">{species.name}</h3>
                    <p className="text-amber-600 italic mb-4">{species.scientificName}</p>
                    <p className="text-stone-500 mb-3">{species.period}</p>
                    <p className="text-stone-700 mb-6">{species.description}</p>
                    <button 
                      className="inline-flex items-center text-amber-600 hover:text-amber-700"
                      onClick={toggleInfo}
                    >
                      <Info className="mr-2 h-5 w-5" />
                      View Characteristics
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSpecies} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition-colors"
            aria-label="Previous species"
          >
            <ChevronLeft className="h-6 w-6 text-stone-700" />
          </button>
          <button 
            onClick={nextSpecies} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 transition-colors"
            aria-label="Next species"
          >
            <ChevronRight className="h-6 w-6 text-stone-700" />
          </button>
          
          {/* Pagination dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {speciesData.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === activeSpecies ? 'bg-amber-500' : 'bg-stone-300'
                }`}
                onClick={() => setActiveSpecies(index)}
                aria-label={`Go to species ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Info panel (slides in from right) */}
        <div 
          ref={infoRef}
          className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 p-8 transform translate-x-full opacity-0 overflow-y-auto`}
        >
          <button 
            onClick={toggleInfo}
            className="absolute top-4 right-4 text-stone-500 hover:text-stone-700"
            aria-label="Close information panel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h3 className="text-2xl font-semibold mb-6">{currentSpecies.name} Characteristics</h3>
          
          <ul className="space-y-4">
            {currentSpecies.characteristics.map((characteristic, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-amber-500 rounded-full w-4 h-4 mt-1 mr-3"></span>
                <span>{characteristic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;