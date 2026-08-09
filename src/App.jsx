import React from 'react';
import SmoothScroll from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import SpotlightOverlay from './components/ui/SpotlightOverlay';
<<<<<<< HEAD
import ScrollProgress from './components/ui/ScrollProgress';
import CustomCursor from './components/ui/CustomCursor';
=======
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568

import Hero from './components/sections/Hero';
import DeveloperJourney from './components/sections/DeveloperJourney'; // Import
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
<<<<<<< HEAD
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
=======
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-background text-text selection:bg-primary selection:text-white overflow-x-hidden">
<<<<<<< HEAD
        <ScrollProgress />
        <CustomCursor />
=======
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
        <SpotlightOverlay />

        <Navbar />

        <main className="relative z-10 pt-20">
          <Hero />
          <DeveloperJourney /> {/* Strip added here */}
          <About />
          <Projects />
          <Skills />
          <Experience />
<<<<<<< HEAD
          <Contact />
        </main>
        <Footer />
=======
        </main>
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
      </div>
    </SmoothScroll>
  );
}

export default App;