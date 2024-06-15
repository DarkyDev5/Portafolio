import Navbar from '../MainPage/navbar';

import About from './AboutUs';

export default function AboutUs() {
  return (
 
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
      <About/>
      </div>
    </div>

    
    
  );
}
