import React from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CollectionRight from "./CollectionRight/CollectionRight";
import CollectionLeft from "./CollectionLeft/CollectionLeft";
import {withRouter} from "react-router-dom";
import collectionList from "../../data/collection";

import "./Collection.css";

class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            myNumber: this.props.match.params.number,
            collection: [],
            selectedItemId: 1,
            editMode: false,
            buildYearValue: 0,
            selectedParks: [],
        }
    }

    componentDidMount() {
        let newCollection = [];

        newCollection = collectionList.map(item => {
            if (item.userId == this.state.myNumber){
                return item
            }
        })

        newCollection = newCollection.filter(function(element){
            return element !== undefined;
        })

        if (newCollection.length !== 0){
            this.setState({
                collection: newCollection,
                selectedItemId: newCollection[0].id
            })

            if (!this.props.isLoggedIn){
                this.props.redirectToLogin(window.location.pathname)
                this.props.history.push('/login')
            }
        }
    }

    getBuildYearValue = (value) => {
        this.setState({buildYearValue: value});
        this.renderNewItems(value, 0);
    }

    getSelectedParks = (parks) => {
        let selectedParks = parks.map(park => {
            if (park.isSelected){
                return park.parkName
            }
        })

        selectedParks = selectedParks.filter(function(element){
            return element !== undefined;
        })
        this.setState({selectedParks: selectedParks});
        this.renderNewItems(0, selectedParks);
    }

    renderNewItems = (buildYear, parks) => {
        let BuildYear = 0
        let newSelectedParks = null
        if (buildYear > 0){
            BuildYear = buildYear;
        }else{
            BuildYear = this.state.buildYearValue
        }

        if (parks !== 0){
            newSelectedParks = parks
        }else{
            newSelectedParks = this.state.selectedParks;
        }
        console.log(newSelectedParks)

        let collection = this.state.collection;
        let selectedItemToBeReplaced
        if (newSelectedParks.length > 0) {
            selectedItemToBeReplaced = collection.map(item => {
                for (let i = 0; i < newSelectedParks.length; i++){
                    if (item.Park === newSelectedParks[i]){
                        return item
                    }
                }
            });
            selectedItemToBeReplaced = selectedItemToBeReplaced.filter(function(element){
                return element !== undefined;
            })
            if (selectedItemToBeReplaced.length > 0){
                this.setState({
                    collection: selectedItemToBeReplaced,
                    selectedItemId: selectedItemToBeReplaced[0].id
                })
            }
        }else{
            let newCollection = []
            newCollection = collectionList.map(item => {
                if (item.userId == this.state.myNumber){
                    return item
                }
            })

            newCollection = newCollection.filter(function(element){
                return element !== undefined;
            })
            this.setState({
                collection: newCollection
            })
        }
    }

    changeMode = () => {
        this.setState({editMode: !this.state.editMode})
    }

    onItemClick = (id) =>{
        this.setState({selectedItemId: id})
        this.setState({
            editMode: false,
        })
    }

    saveItem = (title, description, build_year, park) => {
        let collection = this.state.collection;
        let newState = collection.map(item => {
            if (this.state.selectedItemId === item.id){
                item.id = this.state.selectedItemId
                item.title = title;
                item.description = description;
                item.Build_Year = build_year;
                item.Park = park;
            }
            return item
        });
        this.setState({
            collection: newState,
            editMode: false
        });
    }
    render(){
        let selectedItem = {};
        this.state.collection.filter(item => {
            if (item.id === this.state.selectedItemId){
                selectedItem = item
            }
        })

        let otherItems = [];

        otherItems = this.state.collection.map(item => {
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

        if (this.state.collection.length === 0){
            return <h1>This page doesn't exist</h1>
        }
        return(
            <>
                <Navigation items={itemsList}/>
                <section className="collection">
                    <CollectionLeft
                        item={selectedItem}
                        saveItem={this.saveItem}
                        editMode={this.state.editMode}
                        changeMode={this.changeMode}
                        userId={this.props.userId}
                        getBuildYearValue={this.getBuildYearValue}
                        getSelectedParks={this.getSelectedParks}
                    />
                    <CollectionRight
                        items={otherItems}
                        onItemClick={this.onItemClick}/>
                </section>
                <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
            </>
        )
    }
}

export default withRouter(Collection) ;