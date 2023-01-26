import { useEffect, useContext, useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Addpage.css";
import CollectionContext from "../../Context/CollectionContext";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const Addpage = () => {
    const {user, redirectToLogin, openSelectImage} = useContext(CollectionContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLoggedIn){
            if(user.userId === null){
                if(window.location.href !== window.location.origin + "/user/null/collection"){
                    redirectToLogin(window.location.pathname)
                }
            }
            navigate('/login');
        }
    }, [])

    const itemsList = [
        {
            name: 'Collectie',
            goto: '/user/1/collection',
            border_color: "orange"
        },
        {
            name: 'Backlog',
            goto: '/backlog',
            border_color: "blue"
        },
        {
            name: 'Contact',
            goto: '/#contact',
            border_color: "yellow"
        },
        {
            name: 'Logout',
            goto: '/logout',
            border_color: "purple",
        }
    ];

    return(
        <>
            <Navigation items={itemsList}/>
            <section className="addpage">
                <form className="addpage__form" action="">
                    <h1 className="addpage__heading">Voeg een nieuwe achtbaan toe aan je collectie!</h1>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input placeholder="email"  id="title" className="login__input" type="text"/>
                            <label  className="login__label" htmlFor="title">Titel</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input placeholder="email" type="text" id="description" className="login__input"/>
                            <label className="login__label" htmlFor="description">Beschrijving</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input placeholder="email"  id="Build_Year" className="login__input" type="number"/>
                            <label  className="login__label" htmlFor="Build_Year">Bouw jaar</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input placeholder="email" id="Park" className="login__input" type="text"/>
                            <label  className="login__label" htmlFor="Park">Park</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <select className="addpage__select" name="" id="">
                                <option className="addpage__option" value="">Water</option>
                                <option className="addpage__option" value="">Staal</option>
                                <option className="addpage__option" value="">Hout</option>
                            </select>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <div onClick={openSelectImage} id="email" className="addpage__selectButton">Afbeelding kiezen</div>
                        </div>
                    </div>
                    <div className="addpage__buttonContainer">
                        <button className="login__button">Voeg toe</button>
                    </div>
                </form>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )
}
export default Addpage