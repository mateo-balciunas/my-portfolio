import { useTranslation, Trans } from "react-i18next";

function About() {
    const { t } = useTranslation();
    
    return (
        <section id="about" className="about">
            <h2>{t('about.title')}</h2>
            <div className="about-content">
                <p>
                    <Trans i18nKey="about.p1">
                        ¡Hola!, soy un desarrollador recientemente graduado en  
                        <strong> Desarrollo de Aplicaciones Web (DAW)</strong>. Mi
                        enfoque está en el desarrollo Frontend y Backend, disfruto convirtiendo
                        ideas y diseños en webs funcionales que poder mostrar.
                    </Trans>
                </p>
                <p>
                    <Trans i18nKey="about.p2">
                        A lo largo de mi formación he adquirido bases sólidas en HTML, CSS y 
                        JavaScript, lo cual siempre intento mejorar y seguir adelante.
                        Me estoy enfocando en el ecosistema de <strong>React</strong> para el frontend y
                        <strong> Node</strong> para el backend.
                    </Trans>
                </p>
            </div>
        </section>
    );

}

export default About;