import React from "react";
import Poseidon from "../../../images/coasters/Poseidon.jpg";
import {BsFillPencilFill} from "react-icons/bs";

class CollectionLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item.title,
            description: this.props.item.description,
            build_year: this.props.item.Build_Year,
            park: this.props.item.Park,
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.item.title,
            description: this.props.item.description,
            build_year: this.props.item.Build_Year,
            park: this.props.item.Park,
        })
    }

    changeMode = () => {
        this.props.changeMode();
    }

    onInputchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onButtonClick = () => {
        let title = this.state.title;
        if (this.state.title === null || this.state.title === undefined){
            title = this.props.item.title;
        }
        let description = this.state.description;
        if (this.state.description === null || this.state.description === undefined){
            description = this.props.item.description;
        }
        let build_year = this.state.build_year;
        if (this.state.build_year === null || this.state.build_year === undefined){
            build_year = this.props.item.Build_Year;
        }
        let park = this.state.park;
        if (this.state.park === null || this.state.park === undefined){
            park = this.props.item.Park;
        }
        this.props.saveItem(title, description, build_year, park)
    }

    render(){
        let articleSection = (
            <article className="collection__selected__article">
                <h1 className="collection__selected__h1">{this.props.item.title || "title"}</h1>
                <p className="collection__selected__p">{this.props.item.description || "description"}</p>
                <h2 className="collection__selected__h2">Bouw jaar: {this.props.item.Build_Year || "0000"}</h2>
                <h2 className="collection__selected__h2">Park: {this.props.item.Park || "naam park"}</h2>
            </article>
        );

        if (this.props.editMode === true){
            articleSection = (
                <article className="collection__selected__article">
                    <label className="collection__selected__label" htmlFor="title">Achtbaan naam</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="title"
                        id="title"
                        defaultValue={this.props.item.title}
                        onChange={this.onInputchange}/>
                    <label className="collection__selected__label" htmlFor="description">Achtbaan descriptie</label>
                    <textarea
                        placeholder="hallo"
                        className="collection__selected__textarea"
                        name="description" id="description"
                        defaultValue={this.props.item.description}
                        onChange={this.onInputchange}></textarea>
                    <label className="collection__selected__label" htmlFor="build_year">Achtbaan bouw jaar</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="build_year"
                        id="build_year"
                        defaultValue={this.props.item.Build_Year}
                        onChange={this.onInputchange}/>
                    <label className="collection__selected__label" htmlFor="park">Achtbaan park</label>
                    <input
                        placeholder="hallo"
                        className="collection__selected__input"
                        type="text"
                        name="park"
                        id="park"
                        defaultValue={this.props.item.Park}
                        onChange={this.onInputchange}/>
                    <button onClick={this.onButtonClick} className="collection__selected__button">Opslaan</button>
                </article>
            )
        }

        let editMode = null
        if(this.props.userId === this.props.item.userId){
            editMode = (
                <div className="collection__selected__svgContainer">
                    <div onClick={this.changeMode} className="collection__selected__svg">
                        <BsFillPencilFill/>
                    </div>
                </div>
            )
        }

        return(
            <div className="collection__Left">
                <header className="collection__heading">
                    <h1 className="collection__filter">Filter #1</h1>
                    <h1 className="collection__filter">Filter #2</h1>
                </header>
                <div className="collection__selected__imageContainer">
                    <img className="collection__selected__image" src={this.props.item.img || Poseidon} alt={this.props.item.title || "achtbaan heeft geen eigen afbeelding"}/>
                </div>
                {editMode}
                {articleSection}
            </div>
        )
    }
}

export default CollectionLeft;