import { FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <div className="logo">Mateo Balciunas</div>
            <nav>
                <ul>
                    <li><a href="#about"><FaUser className="nav-icon" /> {t('header.about')}</a></li>
                    <li><a href="#skills"><FaTools className="nav-icon" /> {t('header.skills')}</a></li>
                    <li><a href="#projects"><FaFolderOpen className="nav-icon" /> {t('header.projects')}</a></li>
                    <li><a href="#contact"><FaEnvelope className="nav-icon" /> {t('header.contact')}</a></li>
                </ul>
            </nav>
            <div className="lang-switcher">
                <button 
                    className={i18n.language === 'es' ? 'active' : ''} 
                    onClick={() => changeLanguage('es')}
                >ES</button>
                <button 
                    className={i18n.language === 'en' ? 'active' : ''} 
                    onClick={() => changeLanguage('en')}
                >EN</button>
            </div>
        </header>
    )
}

export default Header;