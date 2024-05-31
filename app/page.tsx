import Navbar from './MainPage/navbar';
import Footer from './MainPage/footer';
import Hero from './MainPage/hero';
import { ThemeProvider } from './ThemeContext';
import Experience from './MainPage/experience';
import Skills from './MainPage/skills2'; // Asegúrate de que la ruta sea correcta

export default function MainPage() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto py-16 px-4 space-y-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Skills />
            </div>
            <Experience />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
