import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface LeadershipProfileProps {
  src: string;
  name: string;
  title: string;
  description: string;
}

const LeadershipProfile: React.FC<LeadershipProfileProps> = ({ src, name, title, description }) => {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
  }));

  const handleScroll = () => {
    const position = window.scrollY;
    const element = document.getElementById(name);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        set({ opacity: 1, transform: 'translateY(0px)' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <animated.div id={name} style={props} className="bg-gray-100 p-12 rounded-lg shadow-lg mb-6">
      <img src={src} alt={name} className="w-48 h-48 rounded-full mx-auto" />
      <h3 className="text-3xl font-semibold mt-4 text-center" style={{ color: '#4f46e5' }}>{name}</h3>
      <p className="text-gray-700 text-center">{title}</p>
      <p className="text-gray-500 mt-2 text-center">{description}</p>
    </animated.div>
  );
};

export default LeadershipProfile;
