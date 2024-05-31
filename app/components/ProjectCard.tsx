"use client";
import { useTheme } from "../ThemeContext";
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Mi Tiquete",
    description: "Web hecha para dar servicio de turismo a cualquier parte del mundo.",
    imageUrl: "/IMG_Proyectos/MiTiquete.jpg",
    link: "/projects/mi-tiquete",
  },
  {
    title: "Conociendo Colombia",
    description: "Web de turismo enfocada en el publico extranjero para conocer Colombia.",
    imageUrl: "/IMG_Proyectos/ConociendoColombia.jpg",
    link: "/projects/conociendo-colombia",
  },
  {
    title: "Multitienda Emprende",
    description: "Web creada para ofrecer productos de alta calidad.",
    imageUrl: "/IMG_Proyectos/MultitiendaEmprende.jpg",
    link: "/projects/multitienda-emprende",
  },
  {
    title: "lofi hip hop radio - beats to relax/study to",
    description: "A live stream of lofi hip hop music for relaxation and study.",
    imageUrl: "/path/to/image4.jpg",
    link: "/projects/lofi-hip-hop-radio",
  },
];

export default function ProjectCard() {
  const { theme } = useTheme();
  const backgroundColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";

  return (
    <div className={`min-h-screen ${backgroundColor} py-20`}>
      <div className="container mx-auto">
        <h1 className={`text-4xl font-extrabold mb-12 ${textColor} text-center`}>
          Proyectos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Link href={project.link} >
              <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="text-right">
                      <span className="inline-block text-black border-b-2 border-black px-3 py-1 text-sm font-medium transition duration-300 hover:text-gray-700 hover:border-gray-700">
                        Ver Proyecto
                      </span>
                    </div>
                  </div>
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
