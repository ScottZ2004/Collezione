import React from "react";
import {FaPlus} from "react-icons/fa";
import SmallColletionItem from "../SmallCollectionItem/SmallColletionItem";

class CollectionRight extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="collection__right">
                <SmallColletionItem/>
                <SmallColletionItem/>
                <SmallColletionItem/>
                <SmallColletionItem/>
                <SmallColletionItem/>
                <SmallColletionItem/>
                <SmallColletionItem/>
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