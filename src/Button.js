import "./Button.css"

const Button = (props) => {
    return(
        <a target="_blank" href={props.goto}>{props.title}</a>
    );
}

export default Button;