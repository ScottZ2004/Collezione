import React from "react";
import "./Filter.css"
import {IoIosArrowUp} from "react-icons/io"

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            sliderInput: null,
        }
    }

    componentDidMount() {
        this.setState({sliderInput: 1950})
    }

    changeSliderValue = (event) => {
        this.setState({sliderInput: event.target.value})
    }

    onButtonClick = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        let dropDown = null
        if (this.props.type === "slider"){
            dropDown = (
                <>
                    <div className="filter__sliderContainer">
                        <h2 className="filter__sliderText">1950</h2>
                        <input onChange={this.changeSliderValue} className="filter__slider" type="range" min="1950" max={new Date().getFullYear()}/>
                        <h2 className="filter__sliderText">{new Date().getFullYear()}</h2>
                    </div>
                    <h2 className="filter__sliderText">{this.state.sliderInput}</h2>
                </>
            )
        }

        if (this.state.isOpen){
            return(
                <div className="filter">
                    <div onClick={this.onButtonClick} className="filter__button filter__button--open">
                        <h1 className="filter__h1">{this.props.title}</h1>
                        <IoIosArrowUp className="filter__icon filter__icon--rotated"/>
                    </div>
                    <div className="filter__open">
                        {dropDown}
                    </div>
                </div>
            )
        }else{
            return(
                <div className="filter">
                    <div onClick={this.onButtonClick} className="filter__button">
                        <h1 className="filter__h1">{this.props.title}</h1>
                        <IoIosArrowUp className="filter__icon"/>
                    </div>

                </div>
            )
        }

    }
}

export default Filter;