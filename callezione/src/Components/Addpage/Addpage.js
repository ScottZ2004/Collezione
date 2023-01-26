import { useEffect, useContext } from "react";
import Navigation from "../Navigation/Navigation";
import "./Addpage.css";
import CollectionContext from "../../Context/CollectionContext";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const Addpage = () => {
    const {user, redirectToLogin, openSelectImage, selectedImage, setAddItemInput, addItemInput, addToCollection, getCollection, addpageError} = useContext(CollectionContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.isLoggedIn){
            if(user.userId === null){
                if(window.location.href !== window.location.origin + "/user/null/collection"){
                    redirectToLogin(window.location.pathname)
                }
            }
            navigate('/login');
        }
        getCollection(user.userId);
    }, [])

    const itemsList = [
        {
            name: 'Collectie',
            goto: '/user/1/collection',
            border_color: "orange"
        },
        {
            name: 'Backlog',
            goto: '/backlog',
            border_color: "blue"
        },
        {
            name: 'Contact',
            goto: '/#contact',
            border_color: "yellow"
        },
        {
            name: 'Logout',
            goto: '/logout',
            border_color: "purple",
        }
    ];

    const onInputChange = (e) => {
        setAddItemInput({
            ...addItemInput,
            [e.target.id]: e.target.value
        })
    }

    return(
        <>
            <Navigation items={itemsList}/>
            <section className="addpage">
                <form onSubmit={addToCollection} className="addpage__form" action="">
                    <h1 className="addpage__heading">Voeg een nieuwe achtbaan toe aan je collectie!</h1>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input onChange={onInputChange} placeholder="email"  id="title" className="login__input" type="text"/>
                            <label  className="login__label" htmlFor="title">Titel</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input onChange={onInputChange} placeholder="email" type="text" id="description" className="login__input"/>
                            <label className="login__label" htmlFor="description">Beschrijving</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input onChange={onInputChange} placeholder="email"  id="Build_Year" className="login__input" type="number"/>
                            <label  className="login__label" htmlFor="Build_Year">Bouw jaar</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <input onChange={onInputChange} placeholder="email" id="Park" className="login__input" type="text"/>
                            <label  className="login__label" htmlFor="Park">Park</label>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <select onChange={onInputChange} className="addpage__select" name="" id="filter">
                                <option className="addpage__option" value="WATER">Water</option>
                                <option className="addpage__option" value="STAAL">Staal</option>
                                <option className="addpage__option" value="HOUT">Hout</option>
                            </select>
                        </div>
                    </div>
                    <div className="login__inputContainer">
                        <div className="login__inputWrapper">
                            <div onClick={openSelectImage} id="email" className="addpage__selectButton">Afbeelding kiezen {selectedImage && <p>{selectedImage}</p>}</div>
                        </div>
                    </div>
                    <div className="addpage__buttonContainer">
                        <button className="login__button">Voeg toe</button>
                    </div>
                    {addpageError && <span className="addpage__error">{addpageError}</span>}
                </form>
            </section>
            <Footer dropDownItems = {["Deutsch","English","Nederlands","Español","Français","Português"]}/>
        </>
    )
}
export default Addpage