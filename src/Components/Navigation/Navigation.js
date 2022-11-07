import logo from '../../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";
import React  from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from "react-router-dom";


class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hamburgermenu: true,
            showSideNavigation: false,
        }
    }

    onClickHamburger = () => {
        this.setState({hamburgermenu: !this.state.hamburgermenu, showSideNavigation: !this.state.showSideNavigation})
    }

    render(){
        let items = null;
        if (this.props.items != null){
            items = this.props.items.map(item => {
                return <a key={item.name} className={`navigation__item navigation__item--${item.border_color} `} href={item.goto}>{item.name}</a>
            });
        }


        let hamburgerMenu = null;
        if (this.state.hamburgermenu){
            hamburgerMenu = (<GiHamburgerMenu onClick={this.onClickHamburger} className="navigation__icon"/>)
        }else if(!this.state.hamburgermenu){
            hamburgerMenu = (<ImCross onClick={this.onClickHamburger} className="navigation__icon"/>)
        }

        let sideNavigation = null;
        let sideNavigationItems = null;
        if (this.state.showSideNavigation){
            sideNavigationItems = this.props.items.map(item => {
                return <a className="sideNavigation__item" key={item.name} href={item.goto}><li>{item.name}</li><AiOutlineArrowRight/></a>
            })
            sideNavigation = (
                <ul className="sideNavigation">
                    {sideNavigationItems}
                </ul>
            );
        }else if(!this.state.showSideNavigation){
            sideNavigation = null;
        }

        return(
            <>
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
                        <Link to="/login" className="button">Login</Link>
                    </div>
                </nav>
                {sideNavigation}
            </>

        );
    }
}

export default Navigation;