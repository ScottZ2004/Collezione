import React from "react";
import {FaPlus} from "react-icons/fa";
import SmallColletionItem from "../SmallCollectionItem/SmallColletionItem";

class CollectionRight extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        let itemsToBeRendered = this.props.items.map(item => {
            return <SmallColletionItem img={item.img} title={item.title}/>;
        })
        return(
            <div className="collection__right">
                {itemsToBeRendered}
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