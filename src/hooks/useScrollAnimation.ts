import { useEffect, useState, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Hook to trigger animations when an element enters the viewport
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    once = true 
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // If once is true, disconnect after element becomes visible
          if (once && observerRef.current && currentElement) {
            observerRef.current.unobserve(currentElement);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    
    if (currentElement) {
      observerRef.current.observe(currentElement);
    }
    
    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);
  
  return [elementRef, isVisible];
}

export default useScrollAnimation;