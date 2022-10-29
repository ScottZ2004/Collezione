import Button from "../Button/Button";
import "./Contact.css";

const Contact = () => {
    return(
        <div id="contact" className="contact">
            <div className="contactWrapper">
                <h1 className="contact__title">Contact</h1>
                <form className="contact__form" action="">
                    <div className="contact__inputWrapper">
                        <input id="name" name="name" placeholder="Scott" className="contact__input" type="text"/>
                        <label for="name" className="contact__label">Naam*</label>
                    </div>
                    <div className="contact__inputWrapper">
                        <input id="email" name="email" placeholder="scott@scottzico.com" className="contact__input" type="text"/>
                        <label for="email" className="contact__label">Email*</label>
                    </div>
                    <div className="contact__inputWrapper">
                        <input id="message" name="message" placeholder="bericht" type="text" className="contact__input" />
                        <label for="message" className="contact__label">Bericht*</label>
                    </div>
                    <Button title="Submit" />
                </form>
            </div>

        </div>

    );
}

export default Contact;