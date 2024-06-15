"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "react-toastify/dist/ReactToastify.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark">
      <main className="w-full h-full flex items-center justify-center p-10 lg:p-24 overflow-hidden relative">
        <div className="hero-container grid grid-cols-4 grid-rows-4 gap-4 w-full p-8 z-10 text-center lg:text-left">
          <div className="hero-text col-span-2 row-span-2 space-y-8 bg-indigo-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(75,0,130,0.3)] p-4">
            <h1 className="text-5xl font-extrabold text-white">Discover more about us</h1>
            <p className="text-lg text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="info-box col-span-2 row-span-1 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]">
            <p>I prioritize client collaboration, fostering open communication</p>
          </div>
          <div className="info-box col-span-1 row-span-2 text-white p-4 bg-purple-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(128,0,128,0.3)]">
            <p>I'm very flexible with time zone communications</p>
          </div>
          <div className="info-box col-span-1 row-span-2 text-white p-4 bg-purple-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(128,0,128,0.3)]">
            <p>I constantly try to improve my tech stack: ReactJS, Express, VueJS, NuxtJS, Typescript, GraphQL</p>
          </div>
          <div className="info-box col-span-2 row-span-1 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]">
            <p>Tech enthusiast with a passion for development.</p>
          </div>
          <div className="info-box col-span-2 row-span-1 text-white p-4 bg-blue-900 bg-opacity-10 rounded-lg shadow-[0_0_10px_5px_rgba(0,0,255,0.3)]">
            <p>Currently building a JS Animation library</p>
          </div>
          <div className="contact-box col-span-4 row-span-1 text-white p-4 bg-indigo-800 bg-opacity-10 rounded-lg shadow-[0_0_8px_5px_rgba(75,0,130,0.3)]">
            <p>Do you want to start a project together?</p>
            <button className="mt-4 px-6 py-3 text-lg font-bold bg-white text-indigo-700 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-[0_0_5px_2px_rgba(255,255,255,0.5)]">
              Copy my email address
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}