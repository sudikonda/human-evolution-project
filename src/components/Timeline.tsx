import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from './TimelineItem';
import { timelineData } from '../data/evolutionData';

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current && timelineRef.current && progressRef.current) {
      const timeline = timelineRef.current;
      const progress = progressRef.current;
      
      gsap.registerPlugin(ScrollTrigger);
      
      // Create the horizontal scroll animation
      const scrollTween = gsap.to(timeline, {
        x: () => -(timeline.scrollWidth - window.innerWidth + 32),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: () => `+=${timeline.scrollWidth - window.innerWidth}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update progress bar
            gsap.set(progress, { scaleX: self.progress });
            
            // Calculate active item
            const newIndex = Math.min(
              Math.floor(self.progress * timelineData.length),
              timelineData.length - 1
            );
            
            if (newIndex !== activeIndex) {
              setActiveIndex(newIndex);
            }
          }
        }
      });
      
      // Animation for timeline items
      const itemSelector = ".timeline-item";
      const items = document.querySelectorAll(itemSelector);
      
      items.forEach((item, i) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            containerAnimation: scrollTween,
            start: "left center+=100",
            toggleActions: "play none none reverse"
          }
        });
      });
      
      return () => {
        // Clean up
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [timelineData.length, activeIndex]);

  return (
    <section 
      id="timeline" 
      ref={containerRef}
      className="min-h-screen py-16 overflow-hidden relative"
    >
      <div className="container-custom mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">The Human Evolution Timeline</h2>
        <p className="text-lg text-stone-600 max-w-2xl">
          Explore the major milestones in human evolution from the earliest hominins to modern Homo sapiens.
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-0.5 bg-stone-200 sticky top-20 z-10">
        <div ref={progressRef} className="timeline-progress"></div>
      </div>
      
      {/* Timeline */}
      <div 
        ref={timelineRef}
        className="timeline-container flex items-start px-4 min-w-max gap-16 py-10"
      >
        {timelineData.map((item, index) => (
          <TimelineItem 
            key={item.id}
            item={item}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;