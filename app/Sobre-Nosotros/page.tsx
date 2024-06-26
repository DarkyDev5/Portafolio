"use client";
import Navbar from '../MainPage/navbar';
import TextContent from './TextContent';

import Parallax from '../components/Parallax';

import LeadershipSection from '../components/LeadershipSection';

export default function About() {
    

    return (
        <div className="relative w-full h-screen">
            <div className="fixed top-0 left-0 w-full z-30">
                <Navbar />
            </div>
            <Parallax>
                <TextContent />
                
            </Parallax>
            <LeadershipSection />
        </div>
    );
}
