import "./Features.css"
import Feature from "../Feature/Feature";

const Features = () => {
    return(
        <section className="features">
            <h1 className="features__h1">Onze Features</h1>
            <div className="features__container">
                <Feature></Feature>
                <Feature></Feature>
                <Feature></Feature>
            </div>
        </section>
    );
}

export default Features;