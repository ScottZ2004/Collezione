import "./Backlog.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import CollectionContext from "../../Context/CollectionContext";
import taron from "../../images/coasters/Taron.jpg";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";

const Backlog = () => {
    const {collection} = useContext(CollectionContext);
    const backlog = collection.map(item => {
        return <li className="backlog__item">{item.title}</li>
    })
    return(
        <>
            <Navigation/>
            <section className="backlog">
                <form className="backlog__form" action="">
                    <h1 className="backlog__header">Backlog Chooser</h1>
                    <div className="backlog__searchContainer">
                        <label htmlFor="park" className="backlog__label">Park</label>
                        <select className="backlog__select" name="park" id="park">
                            <option className="backlog__option" value="hallo">wdfsdgsg</option>
                            <option className="backlog__option" value="hallo">wdfgsg</option>
                            <option className="backlog__option" value="hallo">wgsg</option>
                        </select>
                    </div>
                    <div className="backlog__searchContainer">
                        <label htmlFor="type" className="backlog__label">Type</label>
                        <select className="backlog__select" name="type" id="type">
                            <option className="backlog__option" value="wbdb">dsdsdsdsd</option>
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