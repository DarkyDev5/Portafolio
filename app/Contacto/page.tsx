import Navbar from '../MainPage/navbar';
import { ThemeProvider } from '../ThemeContext';
import ContactForm from './ContactForm';

export default function Projects() {
  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <ContactForm />
      </div>
    </div>

    </ThemeProvider>
    
  );
}
