import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current && imageRef.current) {
      const tl = gsap.timeline();

      tl.from(textRef.current.children, {
        y: 50, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out"
      });

      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      {/* Background image with parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/161417/cave-stones-evolution-161417.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-stone-900 bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="container-custom relative z-10 text-white text-center"
      >
        <h1 className="font-serif font-bold mb-6">The Journey of Human Evolution</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-stone-100">
          Explore the fascinating story of how modern humans evolved through millions of years of adaptation and change.
        </p>
        <a 
          href="#timeline" 
          className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors"
        >
          Explore Timeline
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;