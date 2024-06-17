// pages/about.tsx
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '../MainPage/navbar';
import TextContent from './TextContent';

// Lazy load the video background
const VideoBackground = dynamic(() => import('./VideoBackgroundComponent'), {
  ssr: false,
  loading: () => <p>Loading background...</p>,
});

// Lazy load the ThreeCanvas and UfoCanvas components
const LazyThreeCanvas = dynamic(() => import('../components/AstroCanva'), {
  ssr: false,
  loading: () => <p>Loading ThreeCanvas...</p>,
});

const LazyUfoCanvas = dynamic(() => import('../components/UfoCanva'), {
  ssr: false,
  loading: () => <p>Loading UfoCanva...</p>,
});

export default function About() {
  const [loadCanvases, setLoadCanvases] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadCanvases(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <VideoBackground />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 mt-16">
        {loadCanvases && <LazyThreeCanvas />}
        {loadCanvases && <LazyUfoCanvas />}
        <TextContent />
      </div>
    </div>
  );
}