import logo from '../../images/logo.webp';
import "./Navigation.css";
import CollectionContext from '../../Context/CollectionContext';
import React  from "react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {Link} from "react-router-dom";
import { useState,useContext } from 'react';


const Navigation = (props) =>{
    const {user, setUser, openShare} = useContext(CollectionContext);
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
            <Link to="/signup" className="button">Registreer</Link>
        </div>)
    }else if (!user.isLoggedIn){
        leftButton = (<div className="navigation__right">
            <Link to="/login" className="button">Log in</Link>
        </div>)
    }else if( url === "/"){
        let goTo = "/user/" + user.userId + "/collection/"
        leftButton = (<div className="navigation__right">
            <Link to={goTo} className="button">Collectie</Link>
        </div>)
    }else{
        leftButton = (<div className="navigation__right">
            <button onClick={openShare} className="button">Delen</button>
        </div>) 
    }

    let items = null;
    if (props.items != null){
        items = props.items.map(item => {
            if(item.goto[0] === "#"){
                return <a key={item.name} className={`navigation__item navigation__item--${item.border_color} `} href={item.goto}>{item.name}</a>
            }else if(item.goto === "/logout"){
                return <Link to={"/login"} key={item.name} className={`navigation__item navigation__item--${item.border_color} `} onClick={() => setUser({
                    isLoggedIn: false,
                    userId: null
                })} >{item.name}</Link>
            }
            return <Link key={item.name} className={`navigation__item navigation__item--${item.border_color} `} to={item.goto}>{item.name}</Link>
            
        });
    }

    let hamburgerMenu = null;
    if (hamburgerMenuIsOn){
        hamburgerMenu = (<GiHamburgerMenu onClick={onClickHamburger} className="navigation__icon"/>)
    }else if(!hamburgerMenuIsOn){
        hamburgerMenu = (<ImCross onClick={onClickHamburger} className="navigation__icon"/>)
    }

    let sideNavigation = null;
    if (showSideNavigation && props.items != null){
        let sideNavigationItems = null;
        sideNavigationItems = props.items.map(item => {
            if(item.goto[0] === "#"){
                return <a className="sideNavigation__item" key={item.name} href={item.goto}><li>{item.name}</li><AiOutlineArrowRight/></a>
            }else if(item.goto === "/logout"){
                return <Link to={"/login"} key={item.name} className="sideNavigation__item" onClick={() => setUser({
                    isLoggedIn: false,
                    userId: null
                })} ><li>{item.name}</li><AiOutlineArrowRight/></Link>
            }
            return <Link className="sideNavigation__item" key={item.name} to={item.goto}><li>{item.name}</li><AiOutlineArrowRight/></Link>
        })
        sideNavigation = (
            <ul className="sideNavigation">
                {sideNavigationItems}
            </ul>
        );
    }else{
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