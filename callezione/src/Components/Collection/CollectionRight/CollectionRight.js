import React from "react";
import {FaPlus} from "react-icons/fa";
import SmallColletionItem from "../SmallCollectionItem/SmallColletionItem";
import {Link} from "react-router-dom"

const CollectionRight = (props)=> {
    const itemsToBeRendered = props.items.map(item => {
        return <SmallColletionItem img={item.img} title={item.title} key={item.id} id={item.id}/>;
    })
    return(
        <section className="collection__right">
            {itemsToBeRendered}
            <section className="collection__add">
                <figure className="collection__add__svgContainer">
                    <Link to="/add">
                        <FaPlus className="collection__add__svg"/>
                    </Link>
                </figure>
                <p className="collection__add__text">Voeg een item toe</p>
            </section>
        </section>
    )

}

export default CollectionRight;