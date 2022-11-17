import React from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CollectionRight from "./CollectionRight/CollectionRight";
import CollectionLeft from "./CollectionLeft/CollectionLeft";

import "./Collection.css";

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
                    <CollectionLeft/>
                    <CollectionRight/>
                </section>
                <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
            </>
        )
    }
}

export default Collection;