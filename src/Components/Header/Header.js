import "./Header.css"
import Button from "../Button/Button";
import rolleCcoasterTrans from "../../images/roller-coaster-trans.png";
import rolleCcoasterTrans2 from "../../images/roller-coaster-trans2.png";

const Header = () => {
    return(
        <header className="header">
            <img className="header__img" src={rolleCcoasterTrans} alt="Achtbaan 1"/>
            <div className="header__container">
                <h1 className="header__h1">Collezione</h1>
                <h2 className="header__h2">Alles over achtbanen</h2>
                <Button title="Login"/>
            </div>
            <img className="header__img" src={rolleCcoasterTrans2}alt="Achtbaan 2"/>
        </header>

    );
}

export default Header;