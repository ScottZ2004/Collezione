import React from "react";
import "./Filter.css"
import {IoIosArrowUp} from "react-icons/io"

class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="filter">
                <h1 className="filter__h1">{this.props.type}</h1>
                <IoIosArrowUp className="filter__icon"/>
            </div>
        )
    }
}

export default Filter;