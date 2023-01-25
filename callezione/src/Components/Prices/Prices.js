import "./Prices.css";
import Price from "../Price/Price";
import React from "react";
import Check from "../Check/Check";


class Prices extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            price_list: [],
            checked: [],
        }
    }

    componentDidMount() {
        this.setState({
            price_list: this.props.PriceList.priceList,
            checked: [false, true, false]
        })
    }

    checkPrice = (id) =>{
        let TempState;
        if (id === 1){
            TempState = [true, false, false]
        }else if (id === 2){
            TempState = [false, true, false]
        }else if (id === 3){
            TempState = [false, false, true]
        }

        this.setState({checked: TempState});

    }

    render(){
        let prices = this.state.price_list.map(price =>{
            let checked;
            for (let i = 0; i <= 3; i++){
                if (price.id -1 === i){
                    return <Price checkPrice={this.checkPrice} best_value={price.best_value} h3={price.h3} h1={price.h1} h2={price.h2} key={price.id} checked={this.state.checked[i]} id={price.id}/>

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

}

export default Prices;