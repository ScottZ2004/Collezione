import logo from '../../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";
import React  from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';


class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hamburgermenu: false,
        }
    }



    render(){

        let items = this.props.items.map(item => {
            return <a key={item.name} className={`navigation__item navigation__item--${item.border_color} `} href={item.goto}>{item.name}</a>
        });

        let hamburgerMenu = null;
        if (this.state.hamburgermenu){
            hamburgerMenu = (<GiHamburgerMenu className="navigation__icon"/>)
        }else if(!this.state.hamburgermenu){
            hamburgerMenu = (<ImCross className="navigation__icon"/>)
        }

        return(
            <nav className="navigation">
                <div className="navigation__left">
                    {hamburgerMenu}
                    <a className="navigation__logo" href="#">
                        <img src={logo} alt="logo" className="navigation__img"/>
                        <h1 className="navigation__logo__text">Collezione</h1>
                    </a>
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