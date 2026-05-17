import React from "react";

function Header() {

    return (
        <header className="header">
            <div className="logo">Mateo Balciunas</div>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;