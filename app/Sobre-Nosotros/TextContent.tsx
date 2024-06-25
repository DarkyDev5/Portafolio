"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AboutMain from '../components/AboutMain'; // Importamos el componente principal

const TextContent: React.FC = () => {
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainTitleRef.current && subTitleRef.current && linksRef.current) {
      gsap.fromTo([mainTitleRef.current, subTitleRef.current],
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(linksRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 ref={mainTitleRef} className="text-6xl font-bold mb-2">Sobre Nosotros</h1>
        <div ref={subTitleRef} className="text-xl text-gray-300 mb-8">SOBRE NOSOTROS</div>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div ref={linksRef} className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
        <div className="flex justify-between text-sm">
          <a href="#" className="hover:text-gray-300">Our Mission</a>
          <a href="#" className="hover:text-gray-300">Vision Mean</a>
          <a href="#" className="hover:text-gray-300">Achievents</a>
          <a href="#" className="hover:text-gray-300">Work Process</a>
          <a href="#" className="hover:text-gray-300">Happy Process</a>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-4 text-xs text-gray-400">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
        </div>
      </div>

      {/* Integrate AboutMain component for 3D models */}
      <AboutMain />
    </div>
  );
};

export default TextContent;