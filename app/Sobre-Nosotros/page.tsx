import Navbar from '../MainPage/navbar';
import { ThemeProvider } from '../ThemeContext';
import About from './AboutUs';

export default function AboutUs() {
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
      <About/>
      </div>
    </div>

    </ThemeProvider>
    
  );
}
