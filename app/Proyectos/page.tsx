import ProjectCard from '../components/ProjectCard';
import Navbar from '../MainPage/navbar';
import { ThemeProvider } from '../ThemeContext';

export default function Projects() {
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <ProjectCard />
      </div>
    </div>

    </ThemeProvider>
    
  );
}
