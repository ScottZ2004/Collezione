import logo from './logo.png';
import "./Header.css";
import Button from "./Button";

const Header = (props) => {
    return(
        <header>
            <img src={logo} alt="logo"/>
            <ul>
                <li>{props.item}</li>
                <li>{props.item}</li>
                <li>{props.item}</li>
                <li>{props.item}</li>
            </ul>
            <Button title="Lololol" goto="https://miro.com/app/board/uXjVOm1dLe4=/"/>
            <br/>
            <Button title="POPOdsd" goto="https://miro.com/app/board/uXjVOm1dLe4=/"/>
        </header>
    );
}

export default Header;