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
            return <a key={item.key} className="navigation__item" href={item.goto}>{item.name}</a>
        });
        return(
            <nav className="navigation">
                <p className="navigation__item">Width: {this.props.width}</p>
                <img src={logo} alt="logo" className="navigation__img"/>
                <ul className="navigation__list">
                    {items}
                </ul>
                <Button title="Login" goto="#"/>
            </nav>
        );
    }
}

export default Navigation;