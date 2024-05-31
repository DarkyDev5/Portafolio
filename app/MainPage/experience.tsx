import { FaBriefcase } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Desarrollador Frontend',
      company: 'Tech Company',
      duration: 'Enero 2020 - Presente',
      description: 'Trabajé en el desarrollo de aplicaciones web utilizando React y Next.js, implementando funcionalidades avanzadas y mejorando la experiencia de usuario.'
    },
    {
      role: 'Ingeniero de Software',
      company: 'Software Solutions',
      duration: 'Junio 2018 - Diciembre 2019',
      description: 'Desarrollé soluciones de software utilizando Node.js y Express, asegurando alta calidad y rendimiento en todos los proyectos.'
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
        <FaBriefcase className="mr-2" /> Experiencia
      </h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="bg-blue-700 text-white rounded-full p-3 shadow-md">
                <FaBriefcase className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">{experience.role}</h3>
              <p className="text-sm text-blue-600 mb-1">{experience.company} - {experience.duration}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
