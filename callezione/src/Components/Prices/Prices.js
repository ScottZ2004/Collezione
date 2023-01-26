import "./Prices.css";
import Price from "../Price/Price";
import React, { useState } from "react";
import Check from "../Check/Check";

// props.PriceList.priceList,

const Prices = (props) => {
    const [checked, setChecked] = useState([]);

    const checkPrice = (id) =>{
        let tempState;
        if (id === 1){
            tempState = [true, false, false]
        }else if (id === 2){
            tempState = [false, true, false]
        }else if (id === 3){
            tempState = [false, false, true]
        }
        setChecked(tempState)

    }
    
    let prices = props.PriceList.priceList.map(price =>{
        for (let i = 0; i <= 3; i++){
            if (price.id -1 === i){
                return <Price checkPrice={checkPrice} price={price} checked={checked[i]} id={price.id}/>
            }
        }
    })
    return(
        <article id="prijs" className="prices">
            <header className="prices__header">
                <h1 className="prices__h1">Probeer Collezione</h1>
                <div className="prices__check_container">
                    <Check title="Onbeperkt toegang tot Collezione"/>
                    <Check title="Altijd je geld terug!"/>
                    <Check title="Altijd veilig met Collezione"/>
                    <Check title="Kom in contact met andere achtbaan liefhebbers!"/>
                </div>
            </header>
            <section className="prices__inputWrapper">
                {prices}
            </section>
            <footer className="prices__footer">
                <button className="prices__button">Probeer Gratis!</button>
            </footer>
        </article>
    );
}

export default Prices;