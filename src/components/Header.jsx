import React from "react";
import { FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";



function Header() {

    return (
        <header className="header">
            <div className="logo">Mateo Balciunas</div>
            <nav>
                <ul>
                    <li><a href="#about"><FaUser className="nav-icon" /> About Me</a></li>
                    <li><a href="#skills"><FaTools className="nav-icon" /> Skills</a></li>
                    <li><a href="#projects"><FaFolderOpen className="nav-icon" /> Projects</a></li>
                    <li><a href="#contact"><FaEnvelope className="nav-icon" /> Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;