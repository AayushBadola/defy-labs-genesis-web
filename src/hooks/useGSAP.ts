import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Fade in animations
      const fadeElements = ref.current?.querySelectorAll('.gsap-fade-in');
      if (fadeElements) {
        gsap.fromTo(fadeElements, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.1,
            scrollTrigger: {
              trigger: fadeElements[0],
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Scale animations
      const scaleElements = ref.current?.querySelectorAll('.gsap-scale');
      if (scaleElements) {
        gsap.fromTo(scaleElements,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
              trigger: scaleElements[0],
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Slide animations
      const slideElements = ref.current?.querySelectorAll('.gsap-slide-right');
      if (slideElements) {
        gsap.fromTo(slideElements,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: slideElements[0],
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Floating animations for background elements
      const floatingElements = ref.current?.querySelectorAll('.gsap-float');
      if (floatingElements) {
        floatingElements.forEach((element, index) => {
          gsap.to(element, {
            y: -20,
            duration: 2 + index * 0.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          });
        });
      }

      // Rotation animations
      const rotateElements = ref.current?.querySelectorAll('.gsap-rotate');
      if (rotateElements) {
        rotateElements.forEach(element => {
          gsap.to(element, {
            rotation: 360,
            duration: 20,
            ease: "none",
            repeat: -1
          });
        });
      }

    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useGSAP;