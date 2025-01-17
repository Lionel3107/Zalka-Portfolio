import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-wheat-50">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
    </div>
  );
}

export default App;