import logo from '../../images/logo.png';
import "./Navigation.css";
import Button from "../Button/Button";
import React  from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from "react-router-dom";
import { useState } from 'react';


const Navigation = (props) =>{
    const [hamburgerMenuIsOn, setHamburgerMenuIsOn] = useState(true)
    const [showSideNavigation, setShowSideNavigation] = useState(false)    

    const onClickHamburger = () => {
        setHamburgerMenuIsOn(!hamburgerMenuIsOn);
        setShowSideNavigation(!showSideNavigation);
    }

    const url = window.location.pathname;
    let leftButton;
    if (url === "/login"){
        leftButton = (<div className="navigation__right">
            <Link to="/signup" className="button">Signup</Link>
        </div>)
    }else{
        leftButton = (<div className="navigation__right">
            <Link to="/login" className="button">Login</Link>
        </div>)
    }

    let items = null;
    if (props.items != null){
        items = props.items.map(item => {
            return <a key={item.name} className={`navigation__item navigation__item--${item.border_color} `} href={item.goto}>{item.name}</a>
        });
    }


    let hamburgerMenu = null;
    if (hamburgerMenuIsOn){
        hamburgerMenu = (<GiHamburgerMenu onClick={onClickHamburger} className="navigation__icon"/>)
    }else if(!hamburgerMenuIsOn){
        hamburgerMenu = (<ImCross onClick={onClickHamburger} className="navigation__icon"/>)
    }

    let sideNavigation = null;
    let sideNavigationItems = null;
    if (showSideNavigation){
        sideNavigationItems = props.items.map(item => {
            return <a className="sideNavigation__item" key={item.name} href={item.goto}><li>{item.name}</li><AiOutlineArrowRight/></a>
        })
        sideNavigation = (
            <ul className="sideNavigation">
                {sideNavigationItems}
            </ul>
        );
    }else if(!showSideNavigation){
        sideNavigation = null;
    }

    return(
        <>
            <nav className="navigation">
                <div className="navigation__left">
                    {hamburgerMenu}
                    <Link className="navigation__logo" to="/">
                        <img src={logo} alt="logo" className="navigation__img"/>
                        <h1 className="navigation__logo__text">Collezione</h1>
                    </Link>
                    <ul className="navigation__list">
                        {items}
                    </ul>
                </div>
                {leftButton}
            </nav>
            {sideNavigation}
        </>

    );
    
}

export default Navigation;