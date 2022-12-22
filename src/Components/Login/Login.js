import "./Login.css";

import React from "react";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import CollectionContext from "../../Context/CollectionContext";
import { useState, useContext } from "react";

const Login = () =>{
    const {wrongInput, onInputChange, logIn} = useContext(CollectionContext);
    const [passwordCheck, setPasswordCheck] = useState(false)

    const onEyeClick = () => {
        setPasswordCheck(!passwordCheck);
    }

    let passwordType = "text";
    let eye = (<AiFillEye onClick={onEyeClick} className="login__passwordSvg"/>);
    if (!passwordCheck){
        eye = (
            <AiFillEyeInvisible onClick={onEyeClick} className="login__passwordSvg"/>
        )
        passwordType = "password";
    }
    let wrongText = null;
    if (wrongInput){
        wrongText = (<p className="login__Text__wrong">Sorry maar dit account bestaat niet. Probeer het nog een keer of maak een nieuw account.</p>)
    }
    return(
        <>
            <Navigation/>
            <section className="login">
                <div className="login__svgContainer">
                    <svg className="login__svg" xmlns="http://www.w3.org/2000/svg" width="714.021" height="343.283" viewBox="0 0 714.021 320.283">
                        <g id="Group_16" data-name="Group 16" transform="translate(-36.978 -3229.717)">
                            <path id="Path_23" data-name="Path 23" d="M4.739,70.6c14.475,22.747,54.282-4.691,54.282-4.691s-9.783,15.907-7.4,34.2c1.591,16.3,9.459,32.085,28.632,32.609,13.9-.174,32.61-5.269,41.755-19.883,11.506-18.386,7.158-46.925,7.158-46.925s8.908,46.13,36.347,46.925,32.052-46.925,32.052-46.925S200.392,3.075,175.339.689,57.589,3.075,34.524.689-9.736,47.851,4.739,70.6Z" transform="translate(608.168 3387.804) rotate(180)" fill="#fff"/>
                            <g id="Group_14" data-name="Group 14">
                                <g id="Group_15" data-name="Group 15">
                                    <path id="Path_16" data-name="Path 16" d="M266,.206c146.965,0,265.822,118.7,265.822,265.664-110.608-2.428-243.715.336-243.715.336H106.488c-56.628,0-19.976-.109-106.488,0C0,119.241,119.036.206,266,.206Z" transform="translate(99 3303.794)" fill="#ff7e1d"/>
                                    <path id="Path_17" data-name="Path 17" d="M17.678,0S22.56,27.341,44.56,27.341,71.443,0,71.443,0" transform="translate(251 3378.5)" fill="none" stroke="#413d45" stroke-linecap="round" stroke-width="8"/>
                                    <path id="Path_19" data-name="Path 19" d="M-91.485-42.659S-26.017,25.7,51.5,24,204.738-42.659,204.738-42.659" transform="translate(309.5 3448.5)" fill="none" stroke="#413d45" stroke-linecap="round" stroke-width="8"/>
                                    <path id="Path_20" data-name="Path 20" d="M17.678,0S22.56,27.341,44.56,27.341,71.443,0,71.443,0" transform="translate(371 3378.5)" fill="none" stroke="#413d45" stroke-linecap="round" stroke-width="8"/>
                                </g>
                            </g>
                            <g id="Group_11" data-name="Group 11" transform="translate(-2334.789 3024.631) rotate(-66)">
                                <path id="Rectangle_7" data-name="Rectangle 7" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(740.768 2382.824) rotate(56)" fill="#413d45"/>
                                <path id="Rectangle_6" data-name="Rectangle 6" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(743.224 2387.161) rotate(65)" fill="#413d45"/>
                                <path id="Path_15" data-name="Path 15" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 722.555, 2389.958)" fill="#413d45"/>
                                <path id="Path_14" data-name="Path 14" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 699.047, 2382.885)" fill="#413d45"/>
                                <path id="Path_5" data-name="Path 5" d="M2.552.266l9.576-.25s.655,7.07,9.643,6.962S32.813.073,32.813.073L37.145,0s.256,5.745,9.512,5.9S57.3.191,57.3.191L63.8.266c15.927,0,28.839,14.909,28.839,33.3v8.546a2.771,2.771,0,0,1-2.552,2.947H2.552A2.771,2.771,0,0,1,0,42.113V3.213A2.771,2.771,0,0,1,2.552.266Z" transform="translate(682.234 2375.035) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_3" data-name="Ellipse 3" cx="9.671" cy="9.671" r="9.671" transform="translate(674.161 2409.963) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_4" data-name="Ellipse 4" cx="9.671" cy="9.671" r="9.671" transform="translate(730.323 2432.655) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_12" data-name="Ellipse 12" cx="7.924" cy="7.924" r="7.924" transform="translate(721.152 2375.371)" fill="#413d45"/>
                                <circle id="Ellipse_13" data-name="Ellipse 13" cx="7.924" cy="7.924" r="7.924" transform="translate(696.548 2367.879)" fill="#413d45"/>
                            </g>
                            <g id="Group_12" data-name="Group 12" transform="translate(-1966.008 2096.917) rotate(-45)">
                                <path id="Rectangle_7-2" data-name="Rectangle 7" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(718.269 2375.665) rotate(56)" fill="#413d45"/>
                                <path id="Rectangle_6-2" data-name="Rectangle 6" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(720.725 2380.002) rotate(65)" fill="#413d45"/>
                                <path id="Path_15-2" data-name="Path 15" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 722.555, 2389.958)" fill="#413d45"/>
                                <path id="Path_14-2" data-name="Path 14" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 699.047, 2382.885)" fill="#413d45"/>
                                <path id="Path_5-2" data-name="Path 5" d="M2.552.266l9.576-.25s.655,7.07,9.643,6.962S32.813.073,32.813.073L37.145,0s.256,5.745,9.512,5.9S57.3.191,57.3.191L63.8.266c15.927,0,28.839,14.909,28.839,33.3v8.546a2.771,2.771,0,0,1-2.552,2.947H2.552A2.771,2.771,0,0,1,0,42.113V3.213A2.771,2.771,0,0,1,2.552.266Z" transform="translate(682.234 2375.035) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="9.671" cy="9.671" r="9.671" transform="translate(674.161 2409.963) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_4-2" data-name="Ellipse 4" cx="9.671" cy="9.671" r="9.671" transform="translate(730.323 2432.655) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_12-2" data-name="Ellipse 12" cx="7.924" cy="7.924" r="7.924" transform="translate(721.152 2375.371)" fill="#413d45"/>
                                <circle id="Ellipse_13-2" data-name="Ellipse 13" cx="7.924" cy="7.924" r="7.924" transform="translate(696.548 2367.879)" fill="#413d45"/>
                            </g>
                            <g id="Group_13" data-name="Group 13" transform="matrix(0.906, -0.423, 0.423, 0.906, -1320.353, 1388.369)">
                                <path id="Rectangle_7-3" data-name="Rectangle 7" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(740.768 2382.824) rotate(56)" fill="#413d45"/>
                                <path id="Rectangle_6-3" data-name="Rectangle 6" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(743.224 2387.161) rotate(65)" fill="#413d45"/>
                                <path id="Path_15-3" data-name="Path 15" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.966, 0.259, -0.259, 0.966, 722.555, 2389.958)" fill="#413d45"/>
                                <path id="Path_14-3" data-name="Path 14" d="M4.112.306c.962.038,4.112-2.031,4.112,4.672S6.383,17.114,4.112,17.114,0,11.68,0,4.978,3.15.268,4.112.306Z" transform="matrix(0.985, 0.174, -0.174, 0.985, 699.047, 2382.885)" fill="#413d45"/>
                                <path id="Path_5-3" data-name="Path 5" d="M2.552.266l9.576-.25s.655,7.07,9.643,6.962S32.813.073,32.813.073L37.145,0s.256,5.745,9.512,5.9S57.3.191,57.3.191L63.8.266c15.927,0,28.839,14.909,28.839,33.3v8.546a2.771,2.771,0,0,1-2.552,2.947H2.552A2.771,2.771,0,0,1,0,42.113V3.213A2.771,2.771,0,0,1,2.552.266Z" transform="translate(682.234 2375.035) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_3-3" data-name="Ellipse 3" cx="9.671" cy="9.671" r="9.671" transform="translate(674.161 2409.963) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_4-3" data-name="Ellipse 4" cx="9.671" cy="9.671" r="9.671" transform="translate(730.323 2432.655) rotate(22)" fill="#413d45"/>
                                <circle id="Ellipse_12-3" data-name="Ellipse 12" cx="7.924" cy="7.924" r="7.924" transform="translate(721.152 2375.371)" fill="#413d45"/>
                                <circle id="Ellipse_13-3" data-name="Ellipse 13" cx="7.924" cy="7.924" r="7.924" transform="translate(696.548 2367.879)" fill="#413d45"/>
                                <path id="Rectangle_8" data-name="Rectangle 8" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(717.913 2375.358) rotate(56)" fill="#413d45"/>
                                <path id="Rectangle_9" data-name="Rectangle 9" d="M1.1,0h0a1.1,1.1,0,0,1,1.1,1.1V16.85a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V1.1A1.1,1.1,0,0,1,1.1,0Z" transform="translate(720.37 2379.695) rotate(65)" fill="#413d45"/>
                            </g>
                            <path id="Path_22" data-name="Path 22" d="M28.213,23.311C45.057.344,91.38,28.048,91.38,28.048S80,11.987,82.773-6.483c1.851-16.462,11.008-32.4,33.319-32.924,16.178.175,37.949,5.32,48.59,20.076,13.389,18.564,8.33,47.38,8.33,47.38s10.366-46.576,42.3-47.38,37.3,47.38,37.3,47.38,3.286,63.44-25.869,65.849-137.026-2.409-163.866,0S11.368,46.278,28.213,23.311Z" transform="translate(14.28 3478.408)" fill="#fff"/>
                            <path id="Path_21" data-name="Path 21" d="M28.052,30.769c16.353-25.7,61.325,5.3,61.325,5.3S78.324,18.1,81.02-2.568c1.8-18.42,10.687-36.247,32.347-36.839,15.706.2,36.841,5.953,47.173,22.463,13,20.771,8.087,53.013,8.087,53.013s10.064-52.115,41.063-53.013S245.9,36.069,245.9,36.069s3.19,70.984-25.114,73.679-133.028-2.7-159.085,0S11.7,56.467,28.052,30.769Z" transform="translate(504.992 3460.474)" fill="#fff"/>
                        </g>
                    </svg>
                </div>
                <div className="loginWrapper">
                    <form className="login__form" action="">
                        <h1 className="login__header">Log in</h1>
                        <header className="login__textContainer">
                            <p className="login__text">Nieuw bij Collezione? </p>
                            <Link to="/signup" className="login__text__link">Meld je hier gratis aan</Link>
                        </header>
                        <div className="login__inputContainer">
                            <div className="login__inputWrapper">
                                <input onChange={onInputChange} placeholder="email"  id="email" className="login__input" type="email"/>
                                <label  className="login__label" htmlFor="email">Email address*</label>
                            </div>
                        </div>
                        <div className="login__inputContainer">
                            <div className="login__inputWrapper">
                                <input onChange={onInputChange} type={passwordType} id="password" className="login__input"  placeholder="password"/>
                                <label className="login__label" htmlFor="password">Password (8+ characters)*</label>
                            </div>
                            {eye}
                        </div>
                        {wrongText}
                        <button type="button" className="login__button" onClick={logIn}>LOG IN</button>
                    </form>
                </div>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    );

}

export default Login;