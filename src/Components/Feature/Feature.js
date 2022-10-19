import "./Feature.css";

const Feature = (props) => {
    return(
        <div className="feature">
            <div className="feature__svg_container">
                <svg className="feature__svg" xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24">
                    <path id="Icon_material-person-add" data-name="Icon material-person-add" d="M22.5,18a6,6,0,1,0-6-6A6,6,0,0,0,22.5,18ZM9,15V10.5H6V15H1.5v3H6v4.5H9V18h4.5V15Zm13.5,6c-4.005,0-12,2.01-12,6v3h24V27C34.5,23.01,26.505,21,22.5,21Z" transform="translate(-1.5 -6)" fill="#ff7e1d"/>
                </svg>
            </div>
            <div className="feature__text">
                <h1 className="feature__h1">{props.title || "Feature"}</h1>
                <p className="feature__p">{props.text || "Hier komt een korte uitleg"}</p>
            </div>
        </div>

    );
}

export default Feature;