import "./Backlog.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import CollectionContext from "../../Context/CollectionContext";

const Backlog = () => {
    const {collection} = useContext(CollectionContext);
    const backlog = collection.map(item => {
        return <li>{item.title}</li>
    })
    return(
        <>
            <Navigation/>
            <section className="backlog">
                <form action="">
                    <div className="backlog__searchContainer">
                        <label htmlFor="park" className="backlog__label">Park</label>
                        <select className="backlog__select" name="park" id="park">
                            <option className="backlog__option" value="hallo"></option>
                        </select>
                    </div>
                    <div className="backlog__searchContainer">
                        <label htmlFor="type" className="backlog__label">Type</label>
                        <select className="backlog__select" name="type" id="type">
                            <option className="backlog__option" value="wbdb"></option>
                        </select>
                    </div>
                    <button className="backlog__button">Search</button>
                </form>
                <ul>
                    {backlog}
                </ul>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )
}

export default Backlog;