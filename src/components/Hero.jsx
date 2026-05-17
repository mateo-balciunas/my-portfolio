import React from "react";

function Hero() {

    return(
        <section className="hero">
            <h1>Hola, soy <span className="highlight">Mateo</span></h1>
            <p>Desarrollador Junior</p>
            <p>Especializado en crear soluciones web modernas y eficientes.</p>
            <a href="#projects" className="btn-primary">Ver proyectos</a>
        </section>
    )
}

export default Hero;