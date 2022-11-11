import React from "react";

import {BsFillPencilFill} from "react-icons/bs"
import {FaPlus} from "react-icons/fa"

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

import "./Collection.css";

import Poseidon from "../../images/coasters/Poseidon.jpg";
import tempCoaster from "../../images/coasters/temp-roller coaster.jpg"

class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
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
                border_color: "purple"
            }
        ];
        return(
            <>
                <Navigation items={itemsList}/>
                <section className="collection">
                    <div className="collection__Left">
                        <header className="collection__heading">
                            <h1 className="collection__filter">Filter #1</h1>
                            <h1 className="collection__filter">Filter #2</h1>
                        </header>
                        <div className="collection__selected__imageContainer">
                            <img className="collection__selected__image" src={Poseidon} alt=""/>
                        </div>
                        <div className="collection__selected__svgContainer">
                            <div className="collection__selected__svg">
                                <BsFillPencilFill/>
                            </div>
                        </div>
                        <article className="collection__selected__article">
                            <h1 className="collection__selected__h1">Titel Achtbaan</h1>
                            <p className="collection__selected__p">Lorem ipsuim uysdgfhjsdvfyjvhfj vdahjgdsvfahaaaaaha hahahahahaha hahahahahaha hahahahahaha hahahahasfgdf  fdshgfggdsfhsdfgyudsguysdgfsd fsdfvghysdvfdsvfbndsf dsfsd  fsd sadfsdfsdfSDf sdf sdf fsd sdf sdf sdf dfs DSF SDF DSF F</p>
                            <h2 className="collection__selected__h2">Bouw jaar: 2001</h2>
                            <h2 className="collection__selected__h2">Park: Europapark</h2>
                        </article>
                    </div>
                    <div className="collection__right">
                        <div className="collection__small">
                            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                        </div>
                        <div className="collection__small">
                            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                        </div>
                        <div className="collection__small">
                            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                        </div>
                        <div className="collection__small">
                            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                        </div>
                        <div className="collection__small">
                            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                        </div>
                        <div className="collection__add">
                            <div className="collection__add__svgContainer">
                                <FaPlus className="collection__add__svg"/>
                            </div>
                            <p className="collection__add__text">Voeg een item toe</p>
                        </div>
                    </div>
                </section>
                <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
            </>
        )
    }
}

export default Collection;