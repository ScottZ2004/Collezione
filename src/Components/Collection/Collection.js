import {useContext, useEffect} from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CollectionRight from "./CollectionRight/CollectionRight";
import CollectionLeft from "./CollectionLeft/CollectionLeft";
import {useNavigate, useParams} from "react-router-dom";
import CollectionContext from "../../Context/CollectionContext";
import "./Collection.css";

const Collection = () =>{
    const {collection, setSelectedItem, user, redirectToLogin, selectedItem} = useContext(CollectionContext);


    let myNumber = useParams();
    const navigate = useNavigate();
    let newCollection = collection.filter(item => {
        if(item.userId == myNumber.number){
            return item
        }

    });
   
    let selectedItemToBeRendered = {};
    newCollection.filter(item => {
        if (item.id === selectedItem){
            selectedItemToBeRendered = item
        }
    })

    let otherItems = [];


    otherItems = newCollection.filter(item => {
        if (item.id !== selectedItem){
            return item
        }
});

    useEffect(() => { 
        setSelectedItem(newCollection[0].id);
        if (!user.isLoggedIn){
            redirectToLogin(window.location.pathname);
            navigate('/login');
        }
    },[]);
   

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

    if (newCollection.length === 0){
        return <h1>This page doesn't exist</h1>
    }
    return(
        <>
            <Navigation items={itemsList}/>
            <section className="collection">
                <CollectionLeft
                    item={selectedItemToBeRendered}
                />
                <CollectionRight
                    items={otherItems}/>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )

}

export default Collection ;