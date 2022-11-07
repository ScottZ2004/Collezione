import "./Login.css";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

import {ImFacebook, ImSpotify} from "react-icons/im";
import {AiFillApple} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"

const Login = () => {
    return(
        <>
            <Navigation/>
            <section className="login">
                <div className="loginWrapper">
                    <form className="login__form" action="">
                        <h1 className="login__header">Log in</h1>
                        <p className="login__text">Nieuw bij Collezione? <Link className="login__text__link">Meld je hier gratis aan</Link> </p>
                        <div className="login__inputContainer">
                            <input placeholder="email"  id="email" className="login__input" type="email"/>
                            <label  className="login__label" htmlFor="email">Email address*</label>
                        </div>
                        <div className="login__inputContainer">
                            <input placeholder="password" id="label" className="login__input"  type="password"/>
                            <label className="login__label" htmlFor="label">Password (8+ characters)*</label>
                        </div>
                        <button className="login__button">LOG IN</button>
                        <div className="login__socialButtons">
                            <button className="login__socialButton__apple login__socialButton">
                                <AiFillApple className="login__socialButton__icon"/>
                            </button>
                            <button className="login__socialButton__facebook login__socialButton">
                                <ImFacebook className="login__socialButton__icon"/>
                            </button>
                            <button className="login__socialButton__spotify login__socialButton">
                                <ImSpotify className="login__socialButton__icon"/>
                            </button>
                            <button className="login__socialButton__google login__socialButton">
                                <FcGoogle className="login__socialButton__icon"/>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    );
}

export default Login;