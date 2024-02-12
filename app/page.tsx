import type { AppProps } from 'next/app'
import Navbar from './MainPage/navbar'
import Footer from './MainPage/footer'
import MainPage from './MainPage/hero'
import Skills from './MainPage/skills2'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
       <MainPage/>
       <Skills/>
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
