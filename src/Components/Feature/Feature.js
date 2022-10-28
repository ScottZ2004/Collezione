import "./Feature.css";

const Feature = (props) => {
    let svg = null;
    if(props.title === "Veilig"){
        svg =(
            <svg className="feature__svg"  xmlns="http://www.w3.org/2000/svg" width="55.422" height="67.738" viewBox="0 0 55.422 67.738">
                <path id="Icon_material-security" data-name="Icon material-security" d="M32.211,1.5,4.5,13.816V32.29c0,17.088,11.823,33.068,27.711,36.948C48.1,65.358,59.922,49.378,59.922,32.29V13.816Zm0,33.838H53.764c-1.632,12.685-10.1,23.985-21.553,27.526v-27.5H10.658V17.819L32.211,8.243Z" transform="translate(-4.5 -1.5)" fill="#ff7e1d"/>
            </svg>
        )
    }
    else if(props.title === "Delen"){
        svg =(
            <svg className="feature__svg"  xmlns="http://www.w3.org/2000/svg" width="61.356" height="51.118" viewBox="0 0 61.356 51.118">
                <path id="Icon_ionic-ios-share-alt" data-name="Icon ionic-ios-share-alt" d="M65.315,28.221,42.774,7.134a1.152,1.152,0,0,0-.895-.383c-.7.032-1.6.527-1.6,1.278V18.6a.683.683,0,0,1-.575.655C17.294,22.694,7.853,39.468,4.514,56.88c-.128.687.8,1.326,1.23.783,8.179-10.3,18.132-17.029,33.867-17.157a.79.79,0,0,1,.671.767V51.657A1.371,1.371,0,0,0,42.6,52.5L65.3,31.049a1.764,1.764,0,0,0,.559-1.342A2.14,2.14,0,0,0,65.315,28.221Z" transform="translate(-4.502 -6.749)" fill="#ff7e1d"/>
            </svg>
        )
    }
    else if(props.title === "Service"){
        svg =(
            <svg className="feature__svg" xmlns="http://www.w3.org/2000/svg" width="49.559" height="49.559" viewBox="0 0 49.559 49.559">
                <path id="Icon_awesome-wrench" data-name="Icon awesome-wrench" d="M49.146,10.56a1.161,1.161,0,0,0-1.948-.533l-7.2,7.2L33.43,16.13l-1.095-6.57,7.2-7.2A1.164,1.164,0,0,0,38.985.41,13.871,13.871,0,0,0,22.469,18.33L1.814,38.985a6.194,6.194,0,0,0,8.76,8.76L31.211,27.107A13.892,13.892,0,0,0,49.146,10.56ZM6.195,45.687a2.323,2.323,0,1,1,2.323-2.323A2.324,2.324,0,0,1,6.195,45.687Z" transform="translate(0 0)" fill="#ff7e1d"/>
            </svg>

        )
    }
    return(

        <div className="feature">
            <div className="feature__svg_container">
                {svg}
            </div>
            <div className="feature__text">
                <h1 className="feature__h1">{props.title || "Feature"}</h1>
                <p className="feature__p">{props.text || "Hier komt een korte uitleg"}</p>
            </div>
        </div>

    );
}

export default Feature;