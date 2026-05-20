import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "./i18n";

import "./styles/styles.css" 


function App() {
  return(
    <div>
      {/* ELEMENTOS DINÁMICOS DE FONDO */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      {/* COMPONENTES */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;