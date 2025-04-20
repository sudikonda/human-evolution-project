import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Dna, Microscope, Mountain } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Brain Development',
    description: 'Human brain size tripled over the course of evolution, enabling complex language, abstract thinking, and cultural development.',
    color: 'bg-amber-50 text-amber-700'
  },
  {
    icon: Dna,
    title: 'Genetic Adaptations',
    description: 'Genetic changes over millions of years shaped our immune system, metabolism, and physical characteristics.',
    color: 'bg-emerald-50 text-emerald-700'
  },
  {
    icon: Mountain,
    title: 'Environmental Adaptation',
    description: 'Humans adapted to diverse environments from tropical forests to arctic tundra through both biological and cultural innovations.',
    color: 'bg-blue-50 text-blue-700'
  },
  {
    icon: Microscope,
    title: 'Technological Innovation',
    description: 'From stone tools to modern technology, the ability to create and improve tools has defined human evolution.',
    color: 'bg-purple-50 text-purple-700'
  }
];

const VisualSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && featureRefs.current.length > 0 && imageRef.current) {
      // Parallax effect on the background image
      gsap.to(imageRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Animate features
      featureRefs.current.forEach((feature, index) => {
        if (feature) {
          gsap.from(feature, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            delay: index * 0.15
          });
        }
      });
    }

    return () => {
      // Clean up all ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="visuals" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Parallax background */}
      <div 
        ref={imageRef}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-stone-100/90 to-stone-100/70"
        ></div>
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120%',
            top: '-10%'
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Key Evolutionary Adaptations
          </h2>
          <p className="text-lg text-stone-600">
            Explore the major adaptations that shaped human evolution and led to our unique capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={el => featureRefs.current[index] = el}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow"
            >
              <div className={`${feature.color} p-6 flex items-center justify-center md:w-1/3`}>
                <feature.icon className="w-12 h-12" />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive fact */}
        <div 
          className="mt-16 bg-amber-500 rounded-xl p-8 text-white text-center hover:bg-amber-600 transition-colors cursor-pointer"
          onClick={() => window.open('https://humanorigins.si.edu/evidence', '_blank')}
        >
          <h3 className="text-2xl font-semibold mb-2">Did You Know?</h3>
          <p className="text-lg">
            Humans share approximately 99.9% of their DNA with each other and about 98.8% with chimpanzees, our closest living relatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualSection;