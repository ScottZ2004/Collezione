import tempCoaster from "../../../images/coasters/temp-roller coaster.jpg";
const SmallColletionItem = (props) => {
    return(
        <div className="collection__small">
            <img className="collection__smallContainer" src={props.img || tempCoaster} alt={props.title || "achtbaan heeft geen eigen afbeelding"}/>
            <p className="collection__smallText">{props.title || "title"}</p>
        </div>
    )
}

export default SmallColletionItem;
