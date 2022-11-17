import tempCoaster from "../../../images/coasters/temp-roller coaster.jpg";
const SmallColletionItem = () => {
    return(
        <div className="collection__small">
            <img className="collection__smallContainer" src={tempCoaster} alt=""/>
            <p className="collection__smallText">Coaster Name</p>
        </div>
    )
}

export default SmallColletionItem;
