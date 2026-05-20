import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
const {t} = useTranslation();
const currentYear = new Date().getFullYear();

return (
    <footer className="footer">
        <div className="footer-content">
            <p>©{currentYear} Mateo Balciunas. {t('footer.rights')}</p>
            <div className="footer-socials">
                <a href="https://github.com/mateo-balciunas" target="_blank" rel="noreferrer">< FaGithub /></a>
                <a href="https://www.linkedin.com/in/mateo-balciunas-ronzoni-026658187" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </div>
    </footer>
)

}

export default Footer