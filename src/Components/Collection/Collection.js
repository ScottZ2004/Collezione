import {useContext, useEffect} from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CollectionRight from "./CollectionRight/CollectionRight";
import CollectionLeft from "./CollectionLeft/CollectionLeft";
import {useNavigate, useParams} from "react-router-dom";
import CollectionContext from "../../Context/CollectionContext";
import "./Collection.css";

const Collection = () =>{
    const {collection, setSelectedItem, user, redirectToLogin, selectedItem, setPageNumber, getCollection} = useContext(CollectionContext);


    let myNumber = useParams();
    const navigate = useNavigate();
    
    useEffect(() => { 
        getCollection(myNumber.number);
        setPageNumber(myNumber.number);
        if (!user.isLoggedIn){
            redirectToLogin(window.location.pathname);
            navigate('/login');
        }
    },[]);

    let left = null
    let otherItems = [];
    if(collection.length === 0){
        left = <CollectionLeft />
        
    }else{
        let selectedItemToBeRendered = {};
        collection.filter(item => {
            if (item.id === selectedItem){
                selectedItemToBeRendered = item
            }
        });
        let key = 0
        while (Object.keys(selectedItemToBeRendered).length === 0) {
            selectedItemToBeRendered = collection[key];
            setSelectedItem(key);
            key = key + 1;
        }

        otherItems = collection.filter(item => {
            if (item.id !== selectedItem){
                
                return item
            }
        });
        if(collection.length !== 0){ 
            left = <CollectionLeft item={selectedItemToBeRendered}/>
        }
    }


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
                {left}
                <CollectionRight
                    items={otherItems}/>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )

}

export default Collection ;