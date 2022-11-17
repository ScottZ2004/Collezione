import React from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CollectionRight from "./CollectionRight/CollectionRight";
import CollectionLeft from "./CollectionLeft/CollectionLeft";

import collectionList from "../../data/collection";

import "./Collection.css";

class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collection: [],
            selectedItemId: 1,
        }
    }

    componentDidMount() {
        this.setState({collection: collectionList})
    }

    onItemClick(id){
        console.log(id);
    }

    render(){
        let selectedItem = {};
        this.state.collection.filter(item => {
            if (item.id === this.state.selectedItemId){
                selectedItem = item
            }
        })

        let otherItems = this.state.collection.map(item => {
            if (item.id !== this.state.selectedItemId){
                return item
            }
        });

        otherItems = otherItems.filter(function(element){
            return element !== undefined;
        })

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
                    <CollectionLeft item={selectedItem}/>
                    <CollectionRight items={otherItems} onItemClick={this.onItemClick}/>
                </section>
                <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
            </>
        )
    }
}

export default Collection;