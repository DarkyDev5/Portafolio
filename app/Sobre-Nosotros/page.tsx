"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '../MainPage/navbar';
import TextContent from './TextContent';
import LeadershipSection from '../components/LeadershipSection';
import Parallax from '../components/Parallax';

// Dynamic imports for the components


const AstroCanvas = dynamic(() => import('../components/AboutMain').then(mod => mod.AstroCanvas), {
    ssr: false,
    loading: () => <p>Loading AstroCanvas...</p>,
});



export default function About() {
    const [loadCanvases, setLoadCanvases] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoadCanvases(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div className="fixed top-0 left-0 w-full z-30">
                <Navbar />
            </div>
            <Parallax>
                <TextContent />
                
            </Parallax>
        </div>
    );
}
