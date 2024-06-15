// pages/about.tsx
"use client"
import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
   
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-900">

      {/* Title Section */}
      <section className='text-center relative p-6'>
      <h1 className="text-6xl font-extrabold mb-4" style={{ color: '#4f46e5' }}>
            Sobre Nosotros
          </h1>
      </section>
 
      {/* Image Section */}
      <section className="relative mb-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-50 rounded-lg">
          </div>
            <div className="relative z-10">
              <Image src="/team-photo.jpg" alt="Team" width={1200} height={600} className="rounded-lg shadow-2xl mx-auto" />
            </div>  
      </section>

      <div className="container mx-auto">
        {/* Header Section */}
        <section className="text-center mb-16">
          
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Aqui empieza un proceso a futuro
          </p>
          <a href="#contact" className="bg-purple-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </section>

        {/* Leadership Section 2 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
               Dos desarrolladores con visión
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
          <div className="bg-gray-100 p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <Image src="/leader-1.jpg" alt="Leader 1" width={200} height={200} className="rounded-full shadow-lg mb-4" />
            <h3 className="text-3xl font-semibold mb-2" style={{ color: '#4f46e5' }}>Daniel Catrillon</h3>
            <p className="text-gray-700">Chief Executive Officer</p>
            <p className="text-gray-500 mt-2">Enfocado en resolver problemas con las nuevas tecnologias.</p>
          </div>
          <div className="bg-gray-100 p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <Image src="/leader-2.jpg" alt="Leader 2" width={200} height={200} className="rounded-full shadow-lg mb-4" />
            <h3 className="text-3xl font-semibold mb-2" style={{ color: '#4f46e5' }}>Joseph Benavides</h3>
            <p className="text-gray-700">Chief Technology Officer</p>
            <p className="text-gray-500 mt-2">Enfocado en </p>
          </div>
          </div>
        </section>




        {/* Sección de Servicios */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Desarrollo Web</h3>
              <p className="text-gray-700">Construcción de aplicaciones web responsivas y robustas.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Aplicaciones Móviles</h3>
              <p className="text-gray-700">Creación de experiencias móviles perfectas para Android e iOS.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Soluciones en la Nube</h3>
              <p className="text-gray-700">Provisión de infraestructura en la nube escalable y segura.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Comercio Electrónico</h3>
              <p className="text-gray-700">Desarrollo de soluciones de comercio electrónico personalizadas.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Optimización SEO</h3>
              <p className="text-gray-700">Mejora de sus rankings en los motores de búsqueda.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Marketing Digital</h3>
              <p className="text-gray-700">Creación de campañas de marketing efectivas.</p>
            </div>
          </div>
        </section>

      
        {/* Vision and Mission Section */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Our Vision and Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Visión</h3>
              <p className="text-gray-700">Ser reconocidos como líderes en la industria tecnológica por nuestra capacidad para proporcionar servicios de desarrollo web y aplicaciones móviles que evocan seguridad, confianza y calidad. Aspiramos a posicionarnos como una de las principales empresas de servicios tecnológicos, ofreciendo soluciones funcionales y efectivas que impulsan el éxito de nuestros clientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Misión</h3>
              <p className="text-gray-700">Ofrecer soluciones innovadoras y de alta calidad en el desarrollo de páginas web y aplicaciones móviles, satisfaciendo las necesidades específicas de nuestros clientes a través de un enfoque respetuoso, honesto y orientado a la excelencia. Nos comprometemos a ayudar a nuestros clientes a resolver sus problemas tecnológicos y alcanzar sus objetivos empresariales.</p>
            </div>
          </div>
        </section>

        {/* History Timeline Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Our History
          </h2>
          <div className="relative">
            <div className="border-l-4 border-purple-700 absolute h-full"></div>
            <div className="ml-8 space-y-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#4f46e5' }}>2005</h3>
                <p className="text-gray-700">Founded as a small start-up with a big vision.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#4f46e5' }}>2010</h3>
                <p className="text-gray-700">Expanded our services to include mobile app development.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#4f46e5' }}>2015</h3>
                <p className="text-gray-700">Opened our first international office in Europe.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#4f46e5' }}>2020</h3>
                <p className="text-gray-700">Reached 100+ projects milestone.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2" style={{ color: '#4f46e5' }}>2023</h3>
                <p className="text-gray-700">Won the prestigious Tech Innovation Award.</p>
              </div>
            </div>
          </div>
        </section>

          
        {/* Core Values Section */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Nuestros Valores Fundamentales
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Innovación</h3>
              <p className="text-gray-700">Nos esforzamos por innovar y mejorar nuestras soluciones constantemente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Integridad</h3>
              <p className="text-gray-700">Conducimos nuestro negocio con el más alto nivel de integridad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Excelencia</h3>
              <p className="text-gray-700">Apuntamos a la excelencia en todo lo que hacemos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Colaboración</h3>
              <p className="text-gray-700">Creemos en el poder del trabajo en equipo y la colaboración.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Enfoque en el Cliente</h3>
              <p className="text-gray-700">Nuestros clientes están en el centro de todo lo que hacemos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Sostenibilidad</h3>
              <p className="text-gray-700">Estamos comprometidos con prácticas empresariales sostenibles.</p>
            </div>
          </div>
        </section>


        {/* News and Updates Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Noticias y actualizaciones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Actualizamos Conociendo Colombia</h3>
              <p className="text-gray-700">Renovamos la interfaz de Conociendo Colombia para que por fin taches de tu lista este bello pais.</p>
              <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Award Recognition</h3>
              <p className="text-gray-700">Found.r has been recognized with the Tech Innovation Award for our groundbreaking work in the tech industry.</p>
              <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Community Initiatives</h3>
              <p className="text-gray-700">We are committed to giving back to the community through various initiatives and partnerships.</p>
              <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
          </div>
        </section>


        {/* Sección de Contacto */}
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Ponte en contacto 
          </h2>
          <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" id="name" type="text" placeholder="Tu Nombre" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" id="email" type="email" placeholder="Tu Email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                ¿Puedes proporcionar una descripción general del proyecto que necesitas (desarrollo web o aplicación móvil)?
              </label>
              <textarea className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" id="message" placeholder="Tu Mensaje" required></textarea>
            </div>
            <div className="text-center">
              <button className="bg-purple-700 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </section>

  
        {/* Blog Section */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Nuestro Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Tech Trends 2024</h3>
              <p className="text-gray-700">Stay updated with the latest trends in technology and innovation.</p>
              <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Building a Sustainable Future</h3>
              <p className="text-gray-700">Learn how we are contributing to a sustainable future.</p>
              <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#4f46e5' }}>Employee Spotlight</h3>
              <p className="text-gray-700">Get to know our team and what makes them special.</p>
               <a href="#" className="text-purple-700 hover:underline mt-4 inline-block">Read more</a>
            </div>
          </div>
        </section>


         {/* Social Media Section */}
         <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#4f46e5' }}>
            Siguenos en nuestars redes sociales
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-gray-700 hover:text-purple-700 transition duration-300 transform hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.273c0-2.509 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.461h-1.261c-1.242 0-1.629.771-1.629 1.563v1.861h2.773l-.444 2.891h-2.329v6.987C18.343 21.128 22 16.991 22 12"></path></svg>
            </a>
            <a href="https://twitter.com" className="text-gray-700 hover:text-purple-700 transition duration-300 transform hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor              " viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.948 4.948 0 0 0 2.163-2.723 10.032 10.032 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.664 2.475 4.922 4.922 0 0 0 2.188 4.096 4.903 4.903 0 0 1-2.224-.616v.061a4.922 4.922 0 0 0 3.946 4.827 4.96 4.96 0 0 1-2.212.084 4.923 4.923 0 0 0 4.6 3.42A9.867 9.867 0 0 1 1.12 20.291a13.951 13.951 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.985 0-.214 0-.425-.015-.636A9.935 9.935 0 0 0 24 4.59z"></path></svg>
            </a>
            <a href="https://linkedin.com" className="text-gray-700 hover:text-purple-700 transition duration-300 transform hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.54c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.58c-1.13 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06 1.13 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06zm15.13 12.87h-3.53V14.6c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.07v5.96h-3.53V9h3.38v1.56h.05c.47-.89 1.6-1.83 3.3-1.83 3.53 0 4.18 2.32 4.18 5.35v6.36z"></path></svg>
            </a>
            <a href="https://instagram.com" className="text-gray-700 hover:text-purple-700 transition duration-300 transform hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.687 0 8.246.015 7.047.073 5.803.13 4.665.414 3.757 1.322 2.849 2.23 2.566 3.367 2.509 4.611 2.451 5.81 2.437 6.252 2.437 12s.015 6.19.073 7.389c.057 1.244.34 2.381 1.248 3.289.908.908 2.045 1.191 3.289 1.248 1.198.058 1.64.073 7.389.073s6.19-.015 7.389-.073c1.244-.057 2.381-.34 3.289-1.248.908-.908 1.191-2.045 1.248-3.289.058-1.198.073-1.64.073-7.389s-.015-6.19-.073-7.389c-.057-1.244-.34-2.381-1.248-3.289-.908-.908-2.045-1.191-3.289-1.248C15.313.015 14.871 0 12 0zM12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.15A3.988 3.988 0 1 1 12 8.012a3.988 3.988 0 1 1 0 7.975zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z"></path></svg>
            </a>
            <a href="https://youtube.com" className="text-gray-700 hover:text-purple-700 transition duration-300 transform hover:scale-105">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.008 3.008 0 0 0-2.12-2.126C19.51 3.524 12 3.524 12 3.524s-7.51 0-9.379.536a3.008 3.008 0 0 0-2.12 2.126C0 8.065 0 12 0 12s0 3.936.501 5.814a3.008 3.008 0 0 0 2.12 2.126C4.49 20.476 12 20.476 12 20.476s7.51 0 9.379-.536a3.008 3.008 0 0 0 2.12-2.126C24 15.936 24 12 24 12s0-3.935-.502-5.814zm-14.82 9.31V8.504l6.85 3.496-6.85 3.497z"></path></svg>
            </a>
          </div>
        </section>

        </div>
        </div>
);
};

export default about