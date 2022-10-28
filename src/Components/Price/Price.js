import "./Price.css"
import React from "react";
import check from "../Check/Check";

class Price extends React.Component{
    constructor(props) {
        super(props);
        this.className = "price__input";
        this.state = {
            checked: this.props.checked,
            best_value: this.props.best_value,
            id: this.props.id
        }
    }

    componentDidMount() {
        this.setState({
            checked: this.props.checked,
            best_value: this.props.best_value,
            id: this.props.id
        });
    }


    onclick = () => {
        this.props.checkPrice(this.state.id);
        this.setState({checked: this.state.checked});
        console.log('click2?');
    }

    render(){
        if (this.state.checked){
            this.className = "price__input--checked";
            this.svg = <svg className="price__check__svg" xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#00a452"/>
            </svg>
        }else{
            this.className = "price__input";
            this.svg = <div></div>
        }

        if (this.state.best_value){
            this.bestValue = <p className="price__best_value">Best value</p>
        }else{
            this.bestValue = <p></p>
        }
        return(
            <div onClick={this.onclick} className={this.className}>
                <div>
                    <p>{this.bestValue}</p>
                    <h3 className="price__h3">{this.props.h3}</h3>
                    <h1 className="price__h1">{this.props.h1}</h1>
                    <h2 className="price__h2">{this.props.h2}</h2>
                </div>
                <div className="price__checkbox">{this.svg}</div>
            </div>
        );
    }

}

export default Price;