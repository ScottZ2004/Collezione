import React from "react";
import tempCoaster from "../../../images/coasters/temp-roller coaster.jpg";
import {FaPlus} from "react-icons/fa";

class CollectionRight extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="collection__right">
                <div className="collection__small">
                    <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                </div>
                <div className="collection__small">
                    <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                </div>
                <div className="collection__small">
                    <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                </div>
                <div className="collection__small">
                    <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                </div>
                <div className="collection__small">
                    <img className="collection__smallContainer" src={tempCoaster} alt=""/>
                </div>
                <div className="collection__add">
                    <div className="collection__add__svgContainer">
                        <FaPlus className="collection__add__svg"/>
                    </div>
                    <p className="collection__add__text">Voeg een item toe</p>
                </div>
            </div>
        )
    }
}

export default CollectionRight;