import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Parallax.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallax = parallaxRef.current;
    const earth = earthRef.current;
    const sky = skyRef.current;
    const content = contentRef.current;



    if (parallax && earth && sky && content) {
      gsap.set(earth, { y: '30%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallax,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      tl.to(earth, {
        y: '0%',
        ease: "none"
      }, 0);

      tl.to(sky, {
        y: '10%',
        ease: "none"
      }, 0);

      tl.to(content, {
        y: '50%',
        ease: "none"
      }, 0);
    } else {
  
    }
  }, []);

  return (
    <div ref={parallaxRef} className={`${styles.parallax} relative h-screen overflow-hidden`}>
      <div ref={skyRef} className={`${styles.layer} ${styles.bgSky}`}></div>
      <div ref={earthRef} className={`${styles.layer} ${styles.bgEarth}`}></div>
      <div ref={contentRef} className="relative z-10 h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Parallax;