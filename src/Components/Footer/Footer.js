import "./Footer.css";
import React from "react";

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dropDownIsActive: false,
            language: "Nederlands",
            dropDownItems: this.props.dropDownItems,
        }
    }

    dropDown = () => {
        this.setState({dropDownIsActive: !this.state.dropDownIsActive})
    }

    setLanguage = (event) => {
        this.state.dropDownItems.map(item => {
            if (item === event.currentTarget.innerText){
                this.setState({language: event.currentTarget.innerText, dropDownIsActive: false})
            }
        })
    }

    render(){

        let arrowSVG = null;
        let dropDownMenu = null;
        if (this.state.dropDownIsActive){
            arrowSVG = (
                <svg className="footer__dropdown__svg" xmlns="http://www.w3.org/2000/svg" width="14.871" height="8.503" viewBox="0 0 14.871 8.503">
                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M13.626,17.186l5.623-5.627a1.058,1.058,0,0,1,1.5,0,1.072,1.072,0,0,1,0,1.505L14.379,19.44a1.061,1.061,0,0,1-1.466.031L6.5,13.068A1.063,1.063,0,1,1,8,11.563Z" transform="translate(21.059 19.749) rotate(180)" fill="#fff"/>
                </svg>
            )

            let dropDownItemsToBeRendered = this.state.dropDownItems.map(item => {
                if (item === this.state.language){
                    return (
                        <li className="footer__dropdown__listItem footer__dropdown__listItem--active">{item}</li>
                    )
                }else {
                    return (
                        <li onClick={this.setLanguage} className="footer__dropdown__listItem">{item}</li>
                    )
                }
            })

            dropDownMenu = (
                <div className="footer__dropdown__listContainer">
                    <ul className="footer__dropdown__list">
                        {dropDownItemsToBeRendered}
                    </ul>
                </div>
            )
        }else{
            arrowSVG = (
                <svg className="footer__dropdown__svg" xmlns="http://www.w3.org/2000/svg" width="14.871" height="8.503" viewBox="0 0 14.871 8.503">
                    <path id="Icon_ionic-ios-arrow-down" data-name="Icon ionic-ios-arrow-down" d="M13.626,17.186l5.623-5.627a1.058,1.058,0,0,1,1.5,0,1.072,1.072,0,0,1,0,1.505L14.379,19.44a1.061,1.061,0,0,1-1.466.031L6.5,13.068A1.063,1.063,0,1,1,8,11.563Z" transform="translate(-6.188 -11.247)" fill="#fff"/>
                </svg>
            )
            dropDownMenu = null;
        }
        return(
            <footer className="footer">
                <ul className="footer__list">
                    <a className="footer__list__item" href="">
                        <li>© 2022 Collezione</li>
                    </a>
                    <a className="footer__list__item" href="">
                        <li>Term & conditions</li>
                    </a>
                    <a className="footer__list__item" href="">
                        <li>Privacy policy</li>
                    </a>
                    <a className="footer__list__item" href="">
                        <li>Coockie policy</li>
                    </a>
                </ul>
                <ul className="footer__socialList">
                    <a href="" className="footer__socialList__item">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_5" data-name="Group 5" transform="translate(-73 -17)">
                                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="21" cy="21" r="21" transform="translate(73 17)" fill="#fff"/>
                                    <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M15.139,15.206l.751-4.892H11.2V7.139A2.446,2.446,0,0,1,13.954,4.5h2.134V.331A26.026,26.026,0,0,0,12.3,0C8.434,0,5.907,2.343,5.907,6.585v3.729h-4.3v4.892h4.3V27.034H11.2V15.206Z" transform="translate(85.151 24.483)" fill="#413d45"/>
                                </g>
                            </svg>
                        </li>
                    </a>
                    <a href="" className="footer__socialList__item">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_6" data-name="Group 6" transform="translate(-117 -17)">
                                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="21" cy="21" r="21" transform="translate(117 17)" fill="#fff"/>
                                    <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M12.242,8.2a6.277,6.277,0,1,0,6.277,6.277A6.267,6.267,0,0,0,12.242,8.2Zm0,10.358a4.081,4.081,0,1,1,4.081-4.081,4.088,4.088,0,0,1-4.081,4.081Zm8-10.615a1.464,1.464,0,1,1-1.464-1.464A1.461,1.461,0,0,1,20.24,7.945ZM24.4,9.431A7.246,7.246,0,0,0,22.42,4.3a7.293,7.293,0,0,0-5.13-1.978c-2.021-.115-8.08-.115-10.1,0A7.283,7.283,0,0,0,2.058,4.3,7.269,7.269,0,0,0,.081,9.426c-.115,2.021-.115,8.08,0,10.1a7.246,7.246,0,0,0,1.978,5.13,7.3,7.3,0,0,0,5.13,1.978c2.021.115,8.08.115,10.1,0a7.246,7.246,0,0,0,5.13-1.978,7.293,7.293,0,0,0,1.978-5.13c.115-2.021.115-8.075,0-10.1ZM21.786,21.7a4.132,4.132,0,0,1-2.327,2.327c-1.612.639-5.436.492-7.217.492s-5.611.142-7.217-.492A4.132,4.132,0,0,1,2.7,21.7c-.639-1.612-.492-5.436-.492-7.217S2.064,8.869,2.7,7.262A4.132,4.132,0,0,1,5.025,4.935c1.612-.639,5.436-.492,7.217-.492s5.611-.142,7.217.492a4.132,4.132,0,0,1,2.327,2.327c.639,1.612.492,5.436.492,7.217S22.425,20.09,21.786,21.7Z" transform="translate(125.761 23.521)" fill="#413d45"/>
                                </g>
                            </svg>
                        </li>
                    </a>
                    <a href="" className="footer__socialList__item">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_7" data-name="Group 7" transform="translate(-161 -17)">
                                    <circle id="Ellipse_9" data-name="Ellipse 9" cx="21" cy="21" r="21" transform="translate(161 17)" fill="#fff"/>
                                    <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M20.651,2.25H1.584A1.6,1.6,0,0,0,0,3.853V22.886a1.6,1.6,0,0,0,1.584,1.6H20.651a1.6,1.6,0,0,0,1.589-1.6V3.853A1.6,1.6,0,0,0,20.651,2.25ZM6.721,21.312h-3.3V10.7h3.3V21.312ZM5.073,9.249A1.911,1.911,0,1,1,6.985,7.338,1.912,1.912,0,0,1,5.073,9.249Zm14,12.063h-3.3V16.15c0-1.231-.025-2.815-1.713-2.815-1.718,0-1.981,1.34-1.981,2.725v5.252h-3.3V10.7h3.162v1.45H12a3.472,3.472,0,0,1,3.122-1.713c3.336,0,3.956,2.2,3.956,5.058Z" transform="translate(170.88 24.63)" fill="#413d45"/>
                                </g>
                            </svg>
                        </li>
                    </a>
                    <a href="" className="footer__socialList__item">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_8" data-name="Group 8" transform="translate(-205 -17)">
                                    <circle id="Ellipse_10" data-name="Ellipse 10" cx="21" cy="21" r="21" transform="translate(205 17)" fill="#fff"/>
                                    <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M24.536,8.916c.017.243.017.486.017.729A15.838,15.838,0,0,1,8.607,25.592,15.839,15.839,0,0,1,0,23.076a11.594,11.594,0,0,0,1.353.069,11.225,11.225,0,0,0,6.958-2.395,5.615,5.615,0,0,1-5.24-3.887,7.068,7.068,0,0,0,1.059.087A5.928,5.928,0,0,0,5.6,16.76a5.606,5.606,0,0,1-4.494-5.5v-.069a5.645,5.645,0,0,0,2.533.711A5.613,5.613,0,0,1,1.909,4.4,15.932,15.932,0,0,0,13.465,10.27a6.327,6.327,0,0,1-.139-1.284,5.61,5.61,0,0,1,9.7-3.835A11.035,11.035,0,0,0,26.584,3.8,5.59,5.59,0,0,1,24.12,6.886a11.236,11.236,0,0,0,3.228-.868,12.048,12.048,0,0,1-2.811,2.9Z" transform="translate(212.326 23.528)" fill="#413d45"/>
                                </g>
                            </svg>
                        </li>
                    </a>
                    <a href="" className="footer__socialList__item">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                                <g id="Group_9" data-name="Group 9" transform="translate(-249 -17)">
                                    <circle id="Ellipse_11" data-name="Ellipse 11" cx="21" cy="21" r="21" transform="translate(249 17)" fill="#fff"/>
                                    <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M29.252,7.669a3.619,3.619,0,0,0-2.547-2.563C24.459,4.5,15.452,4.5,15.452,4.5S6.445,4.5,4.2,5.106A3.619,3.619,0,0,0,1.652,7.669a37.967,37.967,0,0,0-.6,6.978,37.967,37.967,0,0,0,.6,6.978A3.565,3.565,0,0,0,4.2,24.147c2.246.606,11.254.606,11.254.606s9.007,0,11.254-.606a3.565,3.565,0,0,0,2.547-2.522,37.967,37.967,0,0,0,.6-6.978,37.967,37.967,0,0,0-.6-6.978ZM12.506,18.93V10.364l7.528,4.283L12.506,18.93Z" transform="translate(254.548 23.388)" fill="#413d45"/>
                                </g>
                            </svg>
                        </li>
                    </a>
                </ul>

                <div className={"footer__dropdownContainer"}>
                    {dropDownMenu}
                    <div onClick={this.dropDown} className="footer__dropdown">
                        <svg className="footer__dropdown__svg" xmlns="http://www.w3.org/2000/svg" width="22.901" height="22.896" viewBox="0 0 22.901 22.896">
                            <path id="Icon_ionic-ios-globe" data-name="Icon ionic-ios-globe" d="M14.823,3.375h-.039a11.448,11.448,0,0,0,.006,22.9h.039a11.448,11.448,0,1,0-.006-22.9ZM24.74,14.052H20.47a21.674,21.674,0,0,0-.539-4.194A16.766,16.766,0,0,0,22.666,8.7,9.86,9.86,0,0,1,24.74,14.052Zm-10.688,0h-3.4a19.563,19.563,0,0,1,.484-3.8,16.744,16.744,0,0,0,2.917.391Zm0,1.541V19a16.815,16.815,0,0,0-2.917.391,19.56,19.56,0,0,1-.484-3.8Zm1.541,0h3.374a19.448,19.448,0,0,1-.484,3.792A16.428,16.428,0,0,0,15.593,19Zm0-1.541V10.64a16.816,16.816,0,0,0,2.889-.385,19.5,19.5,0,0,1,.484,3.8Zm6.021-6.489a15.29,15.29,0,0,1-2.091.853,11.364,11.364,0,0,0-1.458-3A9.959,9.959,0,0,1,21.614,7.563ZM18.07,8.813a15.489,15.489,0,0,1-2.477.33V5.1A6.669,6.669,0,0,1,18.07,8.813ZM14.052,5.081V9.137a15.222,15.222,0,0,1-2.5-.336A6.665,6.665,0,0,1,14.052,5.081Zm-2.51.352A11.453,11.453,0,0,0,10.1,8.411a15.634,15.634,0,0,1-2.064-.848A9.81,9.81,0,0,1,11.543,5.433ZM6.98,8.708A16.434,16.434,0,0,0,9.688,9.853a20.8,20.8,0,0,0-.539,4.194H4.911A9.81,9.81,0,0,1,6.98,8.708ZM4.905,15.593H9.143a21.618,21.618,0,0,0,.539,4.194,17.437,17.437,0,0,0-2.708,1.145A9.862,9.862,0,0,1,4.905,15.593Zm3.121,6.489a15.4,15.4,0,0,1,2.069-.848,11.494,11.494,0,0,0,1.447,2.983A10.054,10.054,0,0,1,8.026,22.082Zm3.522-1.244a15.3,15.3,0,0,1,2.5-.336v4.062A6.655,6.655,0,0,1,11.548,20.838Zm4.045,3.7V20.5a15.489,15.489,0,0,1,2.477.33A6.666,6.666,0,0,1,15.593,24.542Zm2.477-.314a11.364,11.364,0,0,0,1.458-3,15.038,15.038,0,0,1,2.091.859A10.074,10.074,0,0,1,18.07,24.229Zm4.6-3.291a16.766,16.766,0,0,0-2.735-1.156,21.561,21.561,0,0,0,.539-4.188H24.74A9.817,9.817,0,0,1,22.666,20.937Z" transform="translate(-3.375 -3.375)" fill="#fff"/>
                        </svg>
                        <h1>{this.state.language}</h1>
                        {arrowSVG}
                    </div>
                </div>
            </footer>
        )
    }

}

export default Footer;