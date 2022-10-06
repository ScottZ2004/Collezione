import "./Button.css"

const Button = (props) => {

    let classname = props.class + " button";

    return(
        <a className={classname} target="_blank" href={props.goto || "#"}>{props.title || "Button"}</a>
    );
}

export default Button;