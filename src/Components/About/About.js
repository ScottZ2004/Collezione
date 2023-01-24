import "./About.css";
import MensenInAchtbaan from "../../images/Mensen in achtbaan.jpg";
import {Link} from "react-router-dom";
import CollectionContext from "../../Context/CollectionContext";
import { useContext } from "react";
const About = () => {
    const {user} = useContext(CollectionContext);
    let collectionUrl = "user/" + user.userId + "/collection"
    return(
        <section id="over" className="about__section">
            <article className="about__article">
                <h1 className="about__h1">Over Collezione</h1>
                <h2 className="about__h2">
                    Collezione is de nieuwe web-app voor achtbaan liefhebbers.
                    Met Collezione kan je jouw favoriete achtbaan delen met anderen of je kan zelf achtbanen aanbevolen krijgen waar je nog nooit van hebt gehoord.
                    Je kan zelf je eigen gemaakte achtbanen in Planet Coaster, No Limits 2 of een andere achtbaan simulatie delen, of raak geinspireerd om een nieuwe achtbaan te maken.
                </h2>
                <Link to={collectionUrl} className=" button button-left">Ga naar de collectie</Link>
            </article>
            <figure className="about__image-container">
                <img className="about__image" src={MensenInAchtbaan} alt="mensen in achtbaan"/>
            </figure>
        </section>
    )
}

export default About;