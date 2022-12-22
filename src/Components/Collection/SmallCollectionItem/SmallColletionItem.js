import tempCoaster from "../../../images/coasters/temp-roller coaster.jpg";
import { useContext } from "react";
import CollectionContext from "../../../Context/CollectionContext";
const SmallColletionItem = (props) => {

    const {onItemClick} = useContext(CollectionContext);
    const click = () => {
        onItemClick(props.id)
    }

    return(
        <div onClick={click} className="collection__small">
            <img className="collection__smallContainer" src={props.img || tempCoaster} alt={props.title || "achtbaan heeft geen eigen afbeelding"}/>
            <p className="collection__smallText">{props.title || "title"}</p>
        </div>
    )
}

export default SmallColletionItem;
