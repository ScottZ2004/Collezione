import React from "react";
import "./Filter.css"
import {IoIosArrowUp} from "react-icons/io";
import {BiSearchAlt2} from "react-icons/bi";
import parks from "../../data/parks";

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sliderInput: null,
            parks: [],
            oldParksList: [],
            searchValue: "",
        }
    }

    componentDidMount() {
        const parksList = [];
        for (let i = 0; i < parks.parks.length; i++){
            parksList.push({
                id: i,
                parkName: parks.parks[i],
                isSelected: false,
            })
        }
        this.setState({
            sliderInput: 1950,
            parks: parksList,
            oldParksList: parksList,
        })

    }

    changeSliderValue = (event) => {
        this.setState({sliderInput: event.target.value})
        this.props.getBuildYearValue(event.target.value)
    }

    onButtonClick = () => {
        this.props.onFilterCLick(this.props.id);
    }

    onCheckBoxChange = (event) => {
        let parks = this.state.parks;

        parks = parks.filter(function(element){
            return element !== undefined;
        });

        let tempStateParks = parks.map(park => {
            if (event.target.id === park.parkName){
                park.isSelected = !park.isSelected;
            }
            return park;
        });

        this.setState({
            parks: tempStateParks,
        })

        this.props.getSelectedParks(tempStateParks);
    }

    onSearchBarChanged = (event) => {
        let parks = this.state.oldParksList;
        let tempState = parks.map(park => {
            let valueLength = event.target.value.length;
            let parkValueLength = "";
            for (let  i = 0; i < valueLength; i++){
                parkValueLength = parkValueLength + park.parkName[i];
            }
            if (event.target.value === parkValueLength){
                return park
            }
        });
        this.setState({
            searchValue: event.target.value,
            parks: tempState
        });
    }

    render(){
        let dropDown = null;
        let parksList = this.state.parks;
        parksList = parksList.filter(function(element){
            return element !== undefined;
        });
        if (this.state.parks !== undefined ||this.state.parks !== []){
            parksList = parksList.map(park => {
                 return (
                     <li key={park.id} className="filter__searchItem">
                         <label htmlFor={park.parkName} className="filter__searchItem__label">{park.parkName}</label>
                         <input id={park.parkName} className="filter__searchItem__checkbox" type="checkbox" onClick={this.onCheckBoxChange}/>
                     </li>
                )
            })
        }

        if (this.props.type === "slider"){
            dropDown = (
                <>
                    <div className="filter__sliderContainer">
                        <h2 className="filter__sliderText">1950</h2>
                        <input onChange={this.changeSliderValue} className="filter__slider" defaultValue={this.state.sliderInput} type="range" min="1950" max={new Date().getFullYear()}/>
                        <h2 className="filter__sliderText">{new Date().getFullYear()}</h2>
                    </div>
                    <h2 className="filter__sliderText">{this.state.sliderInput}</h2>
                </>
            )
        }
        if (this.props.type === "search") {
            dropDown = (
                <>
                    <div className="filter__searchContainer">
                        <input value={this.state.searchValue} onChange={this.onSearchBarChanged} placeholder="Zoeken" className="filter__searchInput" type="search"/>
                        <BiSearchAlt2 className="filter__searchSVG"/>
                    </div>
                    <ul className="filter__searchList">
                        {parksList}
                    </ul>
                </>
            )
        }

        if (this.props.isOpen){
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