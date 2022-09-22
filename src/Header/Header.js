import logo from '../logo.png';
import "./Header.css";
import Button from "../Button/Button";

const Header = (props) => {
    return(
        <header class="header">
            <img src={logo} alt="logo" class="header__img"/>
            <ul class="header__list">
                <li><a class="header__item" href={props.goto1}>{props.itemone}</a></li>
                <li><a class="header__item" href={props.goto2}>{props.itemtwo}</a></li>
                <li><a class="header__item" href={props.goto3}>{props.itemthree}</a></li>
                <li><a class="header__item" href={props.goto4}>{props.itemfour}</a></li>
            </ul>
            <Button title="Login" goto="#"/>
        </header>
    );
}

export default Header;