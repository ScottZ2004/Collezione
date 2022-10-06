import "./About.css";
import MensenInAchtbaan from "../../images/Mensen in achtbaan.jpg";
import Button from "../Button/Button";

const About = () => {
    return(
        <section className="about__section">
            <article className="about__article">
                <h1 className="about__h1">Over Collezione</h1>
                <h2 className="about__h2">Collezione is de nieuwe web-app voor achtbaan liefhebbers. Met Collezione kan je jouw favoriete achtbaan delen met anderen of je kan zelf achtbanen aanbevolen krijgen waar je nog nooit van hebt gehoord. Je kan zelf je eigen gemaakte achtbanen in Planet Coaster, No Limits 2 of een andere achtbaan simulatie delen, of raak geinspireerd om een nieuwe achtbaan te maken.</h2>
                <Button goto="#" title="Ga naar de collectie!" class="button-left"/>
            </article>
            <div className="about__image-container">
                <img className="about__image" src={MensenInAchtbaan} alt="mensen in achtbaan"/>
            </div>
        </section>
    )
}

export default About;