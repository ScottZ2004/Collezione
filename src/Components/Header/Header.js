import "./Header.css"
import Button from "../Button/Button";

const Header = () => {
    return(
        <header class="header">
            <div class="header__container">
                <h1 class="header__h1">Collezione</h1>
                <h2 class="header__h2">Een kleine tekst</h2>
                <Button/>
            </div>
        </header>

    );
}

export default Header;