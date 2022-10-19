import "./Prices.css";
import Price from "../Price/Price";
import React from "react";

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
                    'best-value': false,
                },
                {
                    'h3': 'Jaarlijks',
                    'h1': '14 days free',
                    'h2': '4.83 EUR/month',
                    'checked': true,
                    'id': 2,
                    'best-value': true,
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


    render(){
        let prices = this.state.price_list.map(price =>{
            return <Price best_value={this.best_value} h3={price.h3} h1={price.h1} h2={price.h2} checked={price.checked} key={price.id} id={price.id}/>
        })
        return(
            <article className="prices">
                <header className="prices__header">
                    <h1 className="prices__h1">Probeer Collezione</h1>
                    <div className="prices__check_container">
                        <div className="prices__check">
                            <svg className="prices__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#ffa867"/>
                            </svg>
                            <p className="prices__check__p">Toegang tot Collezione</p>
                        </div>
                        <div className="prices__check">
                            <svg className="prices__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#ffa867"/>
                            </svg>
                            <p className="prices__check__p">Toegang tot Collezione</p>
                        </div>
                        <div className="prices__check">
                            <svg className="prices__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#ffa867"/>
                            </svg>
                            <p className="prices__check__p">Toegang tot Collezione</p>
                        </div>
                        <div className="prices__check">
                            <svg className="prices__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#ffa867"/>
                            </svg>
                            <p className="prices__check__p">Toegang tot Collezione</p>
                        </div>
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