import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/SobreMi';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotaExtra from './components/NotaExtra'; // 👈 Importación agregada

import './styles/index.css'; // Asegurate de tener dark mode y scroll-behavior acá

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main>
        <section id="home">
          <Home 
            titulo="Hola, soy Fausto Giordano"
            subtitulo="Desarrollador Web Front-End"
            imagen="/assets/images/perfil.jpg"
          />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="tech">
          <Technologies />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="portfolio">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <NotaExtra /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;
