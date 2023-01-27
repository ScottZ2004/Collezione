import "./Price.css"
import React, { useState } from "react";

const Price = (props) =>{

    const onclick = (e) => {
        
        props.checkPrice(props.id);
    }
   
    let className = null;
    let svg;
    if (props.checked){
        svg = (
            <svg className="price__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#00a452"/>
            </svg>
        );
        className = "price__input--checked";

    }else{
        svg = null;
        className = "price__input";
    }
    let bestValue = null
    if (props.price.best_value){
        bestValue = <p className="price__best_value">Beste optie</p>
    }
    return(
        <div onClick={onclick} className={className}>
            <article>
                <p>{bestValue}</p>
                <h3 className="price__h3">{props.price.h3}</h3>
                <h1 className="price__h1">{props.price.h1}</h1>
                <h2 className="price__h2">{props.price.h2}</h2>
            </article>
            <figure className="price__checkbox">{svg}</figure>
        </div>
    );
}

export default Price;