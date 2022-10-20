import "./Prices.css";
import Price from "../Price/Price";
import React from "react";
import Check from "../Check/Check";

class Prices extends React.Component{
    constructor() {
        super();
        this.state ={
            price_list: [
                {
                    'h3': '',
                    'h1': 'Gratis',
                    'h2': '4.83 EUR/month',
                    'checked': false,
                    'id': 1,
                    'best_value': false,
                },
                {
                    'h3': 'Jaarlijks',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'checked': true,
                    'id': 2,
                    'best_value': true,
                },
                {
                    'h3': 'Annual',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'checked': false,
                    'id': 3,
                    'best_value': false,
                }
            ]
        }
    }

    checkPrice = (id) =>{

    }

    render(){
        let prices = this.state.price_list.map(price =>{
            return <Price best_value={price.best_value} h3={price.h3} h1={price.h1} h2={price.h2} checked={price.checked} key={price.id} id={price.id}/>
        })
        return(
            <article className="prices">
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
                    <button className="prices__button">Try for free</button>
                </footer>
            </article>

        );
    }

}

export default Prices;