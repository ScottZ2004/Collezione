import logo from '../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";

const Navigation = (props) => {
    return(
        <header class="navigation">
            <img src={logo} alt="logo" class="navigation__img"/>
            <ul class="navigation__list">
                <li><a class="navigation__item" href={props.goto1 || "#"}>{props.itemone || "item 1"}</a></li>
                <li><a class="navigation__item" href={props.goto2 || "#"}>{props.itemtwo || "item 2"}</a></li>
                <li><a class="navigation__item" href={props.goto3 || "#"}>{props.itemthree || "item 3"}</a></li>
                <li><a class="navigation__item" href={props.goto4 || "#"}>{props.itemfour || "item 4"}</a></li>
            </ul>
            <Button title="Login" goto="#"/>
        </header>
    );
}

export default Navigation;