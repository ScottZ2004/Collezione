import logo from '../../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";

const Navigation = (props) => {


    let items = props.items.map(item => {
        return <a key={item.key} className="navigation__item" href={item.goto}>{item.name}</a>
    });
    return(
        <header className="navigation">
            <img src={logo} alt="logo" className="navigation__img"/>
            <ul className="navigation__list">
                {items}
            </ul>
            <Button title="Login" goto="#"/>
        </header>
    );
}

export default Navigation;