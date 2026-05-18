
function Contact() {

    return(
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>¿Interesado en colaborar o solamente saludar?</p>
            <form className="contact-form" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;