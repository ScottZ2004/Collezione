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

    const [inputs, setInputs] = useState({
        park: "",
        type: ""
    });

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
    }

    console.log(inputs)

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
                            <option className="backlog__option" value="steel">Staal</option>
                            <option className="backlog__option" value="wood">Hout</option>
                            <option className="backlog__option" value="water">Water</option>
                        </select>
                    </div>
                    <button className="button">Search</button>
                </form>
              
                <div className="backlog__item">
                    <img className="backlog__img" src={taron} alt="" />
                    <article className="backlog__itemContainer">
                        <h1 className="backlog__item__title">Taron</h1>
                        <h2 className="backlog__item__park">Phantasialand</h2>
                        <Link className="backlog___link">
                            <BsFillArrowRightCircleFill className="backlog__arrow"/>                           
                        </Link>
                    </article>
                </div>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )
}

export default Backlog;