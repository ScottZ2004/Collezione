import "./Features.css"
import Feature from "../Feature/Feature";

const Features = () => {
    return(
        <section className="features">
            <h1 className="features__h1">Onze Features</h1>
            <div className="features__container">
                <Feature title="Delen" text="Deel je favoriete achtbaan met de wereld"></Feature>
                <Feature title="Veilig" text="Collezione is een veilige en vertrouwd"></Feature>
                <Feature title="Service" text="Bij Collezione krijg je de beste service"></Feature>
            </div>
        </section>
    );
}

export default Features;