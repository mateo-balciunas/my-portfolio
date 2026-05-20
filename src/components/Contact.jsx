import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();

    return(
        <section id="contact" className="contact">
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
            <form className="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">{t('contact.name')}</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t('contact.email')}</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t('contact.message')}</label>
                    <textarea name="message" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">{t('contact.send')}</button>
            </form>
        </section>
    )
}

export default Contact;