import React from "react";
import Filters from "../../Filters/Filters";
import Poseidon from "../../../images/coasters/Poseidon.jpg";
import {BsFillPencilFill} from "react-icons/bs";
import { useContext } from "react";
import CollectionContext from "../../../Context/CollectionContext";
const CollectionLeft = (props) =>{
    const {editMode, onSelectedInputchange, saveItem, changeMode, user,activeFilter} = useContext(CollectionContext);
    let content = null
    if(Object.keys(props).length === 0){
        content = <h1 className="collection__error">Je hebt nog niks in je collectie of je hebt geen achtbaan met {activeFilter} in je collectie zitten. voeg een nieuw item toe door op het plusje te klikken!</h1>
    }else{
        const onClick = () => {
            saveItem(props.item.title,props.item.description,props.item.Build_Year,props.item.Park);
        }

        

        let articleSection = (
            <article className="collection__selected__article">
                <h1 className="collection__selected__h1">{props.item.title || "title"}</h1>
                <p className="collection__selected__p">{props.item.description || "description"}</p>
                <h2 className="collection__selected__h2">Bouw jaar: {props.item.Build_Year || "0000"}</h2>
                <h2 className="collection__selected__h2">Park: {props.item.Park || "naam park"}</h2>
            </article>
        );


        if (editMode){
            articleSection = (
                <article className="collection__selected__article">
                    <label className="collection__selected__label" htmlFor="title">Achtbaan naam</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={props.item.title}
                        onChange={onSelectedInputchange}/>
                    <label className="collection__selected__label" htmlFor="description">Achtbaan descriptie</label>
                    <textarea
                        placeholder="hallo"
                        className="collection__selected__textarea"
                        name="description" id="description"
                        defaultValue={props.item.description}
                        onChange={onSelectedInputchange}></textarea>
                    <label className="collection__selected__label" htmlFor="build_year">Achtbaan bouw jaar</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="build_year"
                        id="build_year"
                        defaultValue={props.item.Build_Year}
                        onChange={onSelectedInputchange}/>
                    <label className="collection__selected__label" htmlFor="park">Achtbaan park</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="park"
                        id="park"
                        defaultValue={props.item.Park}
                        onChange={onSelectedInputchange}/>
                    <button onClick={onClick} className="collection__selected__button">Opslaan</button>
                </article>
            )
        }
        let editModeSection = null;
        if(user.userId === props.item.userId){
            editModeSection = (
                <div className="collection__selected__svgContainer">
                    <figure onClick={changeMode} className="collection__selected__svg">
                        <BsFillPencilFill/>
                    </figure>
                </div>
            )
        }
        content = (
        <>
                <figure className="collection__selected__imageContainer">
                    <img className="collection__selected__image" src={props.item.img || Poseidon} alt={props.item.title || "achtbaan heeft geen eigen afbeelding"}/>
                </figure>
                {editModeSection}
                {articleSection}
        </>
        
        )
    }
    
    
    return(
        <section className="collection__Left">
            <Filters/>
            {content}
        </section>
    )
    
    
    

}

export default CollectionLeft;