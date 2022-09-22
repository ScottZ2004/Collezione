import "./Button.css"

const Button = (props) => {
    return(
        <a class="button" target="_blank" href={props.goto || "#"}>{props.title || "Button"}</a>
    );
}

export default Button;