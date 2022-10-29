import logo from '../../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";
import React from "react";


class Navigation extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){

        let items = this.props.items.map(item => {
            return <a key={item.name} className={`navigation__item navigation__item--${item.border_color} `} href={item.goto}>{item.name}</a>
        });
        return(
            <nav className="navigation">
                <div className="navigation__left">
                    <div className="navigation__logo">
                        <img src={logo} alt="logo" className="navigation__img"/>
                        <h1 className="navigation__logo__text">Collezione</h1>
                    </div>
                    <ul className="navigation__list">
                        {items}
                    </ul>
                </div>
                <div className="navigation__right">
                    <Button title="Login" goto="#"/>
                </div>
            </nav>
        );
    }
}

export default Navigation;