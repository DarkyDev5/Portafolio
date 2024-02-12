// Hero.tsx
"use client"
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Skills from './skills2'; // Asegúrate de actualizar esta ruta para que apunte al archivo de tu componente Skills
import Image from 'next/image';
export default function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const notify = () => toast("¡Gracias por tu interés!");

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-start lg:justify-center p-10 lg:p-24 overflow-hidden">
      <ToastContainer />
      <motion.div 
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:w-3/4 xl:w-3/4 bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl lg:space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-1/2 p-8 space-y-8">
          <TypeAnimation
            sequence={[
              'Hola, soy Daniel ',
              1000,
              'Soy un desarrollador de software',
              1000,
              'Especializado en JavaScript, React y Next.js',
              1000
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl font-bold text-gray-900"
            repeat={Infinity}
          />
          <p className="text-lg text-gray-700">Me apasiona crear experiencias web fluidas y atractivas. Con un fuerte enfoque en la calidad y la atención al detalle, siempre busco la perfección en cada proyecto en el que trabajo.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={32} />
            </a>
          </div>
          <Link href="/projects"  onClick={notify} className="inline-block mt-4 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300">
           
              Ver mis proyectos
            
          </Link>
          <button onClick={() => setModalOpen(true)} className="ml-4 px-6 py-3 text-lg font-bold text-indigo-600 border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300">Leer más sobre mí</button>
          <Image src="/pngegg.png" alt="Your Name" height={500} width={500}  />
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setModalOpen(false)}
            contentLabel="About Me"
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white p-8"
          >
            <div className="w-full max-w-2xl p-8 space-y-8 bg-white rounded-2xl text-gray-900">
              <h2 className="text-4xl font-bold">Sobre mí</h2>
              <p className="text-lg">Aquí puedes poner más información sobre ti.</p>
              <button onClick={() => setModalOpen(false)} className="mt-4 px-6 py-3 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300">Cerrar</button>
            </div>
          </Modal>
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:pl-16 flex flex-col items-center space-y-8">
          <div className="w-full">
            <Skills />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
