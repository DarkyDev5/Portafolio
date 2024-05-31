"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../ThemeContext"; // Asegúrate de que esta ruta sea correcta también

export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const notify = () => toast("¡Gracias por tu interés!");
  const { theme } = useTheme();

  const backgroundColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';

  return (
    <main className={`h-screen ${backgroundColor} flex items-center justify-center p-10 lg:p-24 overflow-hidden`}>
      <ToastContainer />
      <motion.div
        className={`flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl ${backgroundColor} ${textColor} rounded-2xl overflow-hidden shadow-2xl p-8`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-1/2 space-y-8">
          <TypeAnimation
            sequence={[
              'Hola, somos dos jovenes',
              1000,
              'Somos desarrolladores de software',
              1000,
              'Especializados en JavaScript, React, Next.js, Joomla y Wordpress',
              1000
            ]}
            wrapper="h1"
            speed={50}
            className={`text-4xl font-bold ${textColor}`}
            repeat={Infinity}
          />
          <p className={`text-lg ${textColor}`}>Nos apasiona crear experiencias web fluidas y atractivas. Con un fuerte enfoque en la calidad y la atención al detalle, siempre buscamos la perfección en cada proyecto en el que trabjamos.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={`text-2xl ${textColor}`}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className={`text-2xl ${textColor}`}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={`text-2xl ${textColor}`}>
              <FaTwitter />
            </a>
          </div>
          <div className="flex space-x-4">
            <Link href="/Proyectos"  onClick={notify} className="mt-4 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300">
              
                Ver nuestros proyectos
              
            </Link>
            <button onClick={() => setModalOpen(true)} className="mt-4 px-6 py-3 text-lg font-bold text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300">
              Leer más sobre nosotros
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image src="/pngegg.png" alt="Your Name" height={500} width={500} className="rounded-full shadow-lg" />
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="About Me"
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white p-8"
        >
          <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-2xl text-gray-900">
            <h2 className="text-4xl font-bold">Sobre mí</h2>
            <p className="text-lg">Aquí puedes poner más información sobre ti.</p>
            <button onClick={() => setModalOpen(false)} className="mt-4 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300">
              Cerrar
            </button>
          </div>
        </Modal>
      </motion.div>
    </main>
  );
}
