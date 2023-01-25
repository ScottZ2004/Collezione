import "./Header.css"
import {Link} from "react-router-dom";
import rolleCcoasterTrans from "../../images/roller-coaster-trans.webp";
import rolleCcoasterTrans2 from "../../images/roller-coaster-trans2.webp";

const Header = () => {
    return(
        <header>
            <div className="header">
                <img className="header__img" src={rolleCcoasterTrans2} alt="Achtbaan 1"/>
                <div className="header__container">
                    <h1 className="header__h1">Collezione</h1>
                    <h2 className="header__h2">"Life is like a rollercoaster"</h2>
                    <Link to="/login" className="button-center button">Login</Link>
                </div>
                <img className="header__img" src={rolleCcoasterTrans}alt="Achtbaan 2"/>
            </div>
            <figure className="custom-shape-divider-bottom-1665051738">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </figure>
        </header>
    );
}

export default Header;