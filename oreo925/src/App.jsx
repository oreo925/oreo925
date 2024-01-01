import React from 'react';
import './Components/styles.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
