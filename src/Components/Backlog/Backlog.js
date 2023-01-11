import "./Backlog.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useContext, useState, useEffect } from "react";
import CollectionContext from "../../Context/CollectionContext";
import taron from "../../images/coasters/Taron.jpg";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import parks from "../../data/parks";

const Backlog = () => {
    const {collection} = useContext(CollectionContext);
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        park: "",
        type: ""
    });

    const [chosenCoaster, setChosenCoaster] = useState({});

    let activeParks = []
    collection.filter(item => {
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
        const item = collection.filter(coaster => {
            if(coaster.Park.toUpperCase() === inputs.park.toUpperCase() && coaster.filter.toUpperCase() === inputs.type.toUpperCase()){
                return coaster
            }
        });
        if(item.length > 0){
            setChosenCoaster(item[0]);
        }else{
            setChosenCoaster(item)
        }
        console.log(item)
        if(item.length < 1){
            setError("Geen achtbaan gevonden")
        }
                
    }
    let coasterToBeRendered = null;
    if(chosenCoaster.Park !== undefined){
        coasterToBeRendered = (
            <div className="backlog__item">
                <img className="backlog__img" src={chosenCoaster.img} alt="" />
                <article className="backlog__itemContainer">
                    <h1 className="backlog__item__title">{chosenCoaster.title}</h1>
                    <h2 className="backlog__item__park">{chosenCoaster.Park}</h2>
                    <Link className="backlog___link">
                        <BsFillArrowRightCircleFill className="backlog__arrow"/>                           
                    </Link>
                </article>
            </div>
        )
    }

    return(
        <>
            <Navigation/>
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