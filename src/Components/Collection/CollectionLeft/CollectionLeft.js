import React from "react";
import Poseidon from "../../../images/coasters/Poseidon.jpg";
import {BsFillPencilFill} from "react-icons/bs";

class CollectionLeft extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.item)
        return(
            <div className="collection__Left">
                <header className="collection__heading">
                    <h1 className="collection__filter">Filter #1</h1>
                    <h1 className="collection__filter">Filter #2</h1>
                </header>
                <div className="collection__selected__imageContainer">
                    <img className="collection__selected__image" src={this.props.item.img} alt={this.props.item.title}/>
                </div>
                <div className="collection__selected__svgContainer">
                    <div className="collection__selected__svg">
                        <BsFillPencilFill/>
                    </div>
                </div>
                <article className="collection__selected__article">
                    <h1 className="collection__selected__h1">{this.props.item.title}</h1>
                    <p className="collection__selected__p">{this.props.item.description}</p>
                    <h2 className="collection__selected__h2">Bouw jaar: {this.props.item.Build_Year}</h2>
                    <h2 className="collection__selected__h2">Park: {this.props.item.Park}</h2>
                </article>
            </div>
        )
    }
}

export default CollectionLeft;