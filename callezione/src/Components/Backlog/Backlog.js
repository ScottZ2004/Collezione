import "./Backlog.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useContext, useState, useEffect } from "react";
import CollectionContext from "../../Context/CollectionContext";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import collectionData from "../../data/collection";

const Backlog = () => {
    const {setSelectedItem, collectionFromDataBase} = useContext(CollectionContext);
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        park: "",
        type: ""
    });

    const [chosenCoaster, setChosenCoaster] = useState({});

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

    let activeParks = []
    collectionFromDataBase.filter(item => {
        activeParks.push(item.Park)
    });
    activeParks = [...new Set(activeParks)]
    let activeParksToBeRendered = activeParks.map(park => {
        return (
            <option key={park} className="backlog__option" value={park.toLowerCase()}>{park}</option>
        )
    });

    const onInputChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value
        });
    }

    const submit = (e) => {
        e.preventDefault();
        setError("")
        setChosenCoaster({})
        const item = collectionFromDataBase.filter(coaster => {
            if(coaster.Park.toUpperCase() === inputs.park.toUpperCase() && coaster.filter.toUpperCase() === inputs.type.toUpperCase()){
                return coaster
            }
        });
        if(item.length > 0){
            setChosenCoaster(item[0]);
        }else{
            setChosenCoaster(item)
        }
        if(item.length < 1){
            setError("Geen achtbaan gevonden")
        }   
    }

    useEffect(() => {
        setInputs({
            park: activeParks[0],
            type: "staal"
        })       
    }, [])

    let coasterToBeRendered = null;
    if(chosenCoaster.Park !== undefined){
        const linkToBeRendered = "/user/" + chosenCoaster.userId + /collection/;
        
        coasterToBeRendered = (
            <figure className="backlog__item">
                <img className="backlog__img" src={chosenCoaster.img} alt="" />
                <article className="backlog__itemContainer">
                    <h1 className="backlog__item__title">{chosenCoaster.title}</h1>
                    <h2 className="backlog__item__park">{chosenCoaster.Park}</h2>
                    <Link className="backlog___link" onClick={() => setSelectedItem(chosenCoaster.id)} to={linkToBeRendered}>
                        <BsFillArrowRightCircleFill className="backlog__arrow"/>                           
                    </Link>
                </article>
            </figure>
        )
    }

    return(
        <>
            <Navigation items={itemsList}/>
            <section className="backlog">
                <form onSubmit={submit} className="backlog__form" action="">
                    <h1 className="backlog__header">Backlog Chooser</h1>
                    <div className="backlog__searchContainer">
                        <label htmlFor="park" className="backlog__label">Park</label>
                        <select onChange={onInputChange} className="backlog__select" name="park" id="park">
                            {activeParksToBeRendered}
                        </select>
                    </div>
                    <div className="backlog__searchContainer">
                        <label htmlFor="type" className="backlog__label">Type</label>
                        <select onChange={onInputChange} className="backlog__select" name="type" id="type">
                            <option className="backlog__option" value="staal">Staal</option>
                            <option className="backlog__option" value="hout">Hout</option>
                            <option className="backlog__option" value="water">Water</option>
                        </select>
                    </div>
                    <button className="button">Search</button>
                    {error && <span className="backlog__error">{error}</span>}
                </form>
                {coasterToBeRendered}
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )
}

export default Backlog;