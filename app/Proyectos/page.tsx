import ProjectCard from '../components/ProjectCard';
import Navbar from '../MainPage/navbar';


export default function Projects() {
  return (
   
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <ProjectCard />
      </div>
    </div>

   
  );
}
