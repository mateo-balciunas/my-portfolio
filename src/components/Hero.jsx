import React from "react";
import { useTranslation, Trans } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return(
        <section className="hero">
            <h1><Trans i18nKey="hero.title"><span className="highlight">Mateo</span></Trans></h1>
            <p>{t('hero.subtitle')}</p>
            <p>{t('hero.description')}</p>
            <a href="#projects" className="btn-primary">{t('hero.button')}</a>
        </section>
    )
}

export default Hero;