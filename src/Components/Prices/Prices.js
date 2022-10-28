import "./Prices.css";
import Price from "../Price/Price";
import React from "react";
import Check from "../Check/Check";

class Prices extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            price_list: []
        }
    }

    componentDidMount() {
        this.setState({
            price_list: [
                {
                    'h3': '',
                    'h1': 'Gratis',
                    'h2': '4.83 EUR/month',
                    'id': 1,
                    'best_value': false,
                    'checked': false,
                },
                {
                    'h3': 'Jaarlijks',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'id': 2,
                    'best_value': true,
                    'checked': true,
                },
                {
                    'h3': 'Annual',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'id': 3,
                    'best_value': false,
                    'checked': false,
                }
            ]
        })
    }

    checkPrice = (id) =>{
        this.setState({price_list:
            [
                {
                    'h3': '',
                    'h1': 'Gratis',
                    'h2': '4.83 EUR/month',
                    'id': 1,
                    'best_value': false,
                    'checked': false,
                },
                {
                    'h3': 'Jaarlijks',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'id': 2,
                    'best_value': true,
                    'checked': false,
                },
                {
                    'h3': 'Annual',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'id': 3,
                    'best_value': false,
                    'checked': false,
                }
            ]
        }
        );
        this.state.price_list.map(price => {
            if (id === 1){
                this.setState({price_list:
                        [
                            {
                                'h3': '',
                                'h1': 'Gratis',
                                'h2': '0 EUR/month',
                                'id': 1,
                                'best_value': false,
                                'checked': true,
                            },
                            {
                                'h3': 'Jaarlijks',
                                'h1': '14 days free',
                                'h2': '4.83 EUR/month',
                                'id': 2,
                                'best_value': true,
                                'checked': false,
                            },
                            {
                                'h3': 'Annual',
                                'h1': '14 days free',
                                'h2': '4.83 EUR/month',
                                'id': 3,
                                'best_value': false,
                                'checked': false,
                            }
                        ]
                    }
                );
            }else if (id === 2){
                this.setState({price_list:
                            [
                                {
                                    'h3': '',
                                    'h1': 'Gratis',
                                    'h2': '4.83 EUR/month',
                                    'id': 1,
                                    'best_value': false,
                                    'checked': false,
                                },
                                {
                                    'h3': 'Jaarlijks',
                                    'h1': '14 days free',
                                    'h2': '4.83 EUR/month',
                                    'id': 2,
                                    'best_value': true,
                                    'checked': true,
                                },
                                {
                                    'h3': 'Annual',
                                    'h1': '14 days free',
                                    'h2': '4.83 EUR/month',
                                    'id': 3,
                                    'best_value': false,
                                    'checked': false,
                                }
                            ]
                    }
                );
            }else if (id === 3){
                this.setState({price_list:
                            [
                                {
                                    'h3': '',
                                    'h1': 'Gratis',
                                    'h2': '4.83 EUR/month',
                                    'id': 1,
                                    'best_value': false,
                                    'checked': false,
                                },
                                {
                                    'h3': 'Jaarlijks',
                                    'h1': '14 days free',
                                    'h2': '4.83 EUR/month',
                                    'id': 2,
                                    'best_value': true,
                                    'checked': false,
                                },
                                {
                                    'h3': 'Annual',
                                    'h1': '14 days free',
                                    'h2': '4.83 EUR/month',
                                    'id': 3,
                                    'best_value': false,
                                    'checked': true,
                                }
                            ]
                    }
                );
            }
        })
    }

    render(){
        let prices = this.state.price_list.map(price =>{
            return <Price checkPrice={this.checkPrice} best_value={price.best_value} h3={price.h3} h1={price.h1} h2={price.h2} key={price.id} checked={price.checked} id={price.id}/>
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