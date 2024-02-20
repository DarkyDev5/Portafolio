import type { AppProps } from 'next/app'
import Navbar from './MainPage/navbar'
import Footer from './MainPage/footer'
import Hero from './MainPage/hero'
import Skills from './MainPage/skills2'
import { ThemeProvider } from './ThemeContext';


export default function MainPage() {
  return (
    <ThemeProvider>
        <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
       <Hero/>
       <Skills/>
      </main>
      <Footer />
    </div>
    </ThemeProvider>
    
  )
}

