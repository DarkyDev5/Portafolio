import dynamic from 'next/dynamic';
import Navbar from '../MainPage/navbar';
import AboutGe from './AboutUs';
import TextContent from './TextContent'; // Import your TextContent component
import UfoCanva from '../components/UfoCanva';

// Import ThreeCanvas dynamically
const ThreeCanvas = dynamic(() => import('../components/AstroCanva'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function About() {
  return (
    <div className="relative w-full h-screen">
      <div className="fixed top-0 left-0 w-full ">
        <Navbar />
      </div>
      <video autoPlay muted loop className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]">
        <source src="/videosobre.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30 mt-16">
        <ThreeCanvas /> {/* Render ThreeCanvas first */}
        <TextContent /> {/* Render TextContent afterwards */}
        <UfoCanva />
      
      </div>
    </div>
  );
}
