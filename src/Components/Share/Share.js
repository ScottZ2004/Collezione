import { useState, useContext, useRef } from "react";
import "./Share.css";
import CollectionContext from "../../Context/CollectionContext";
import userEvent from "@testing-library/user-event";

const Share = () => {
    const modalRef = useRef();
    const {setShareIsOpen, shareIsOpen, user } = useContext(CollectionContext);
    const [isCopied, setIsCopied] = useState(false)

    const url = "http://collezione.scottzico.com/user/" + user.userId +"/collection/"

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true)
    }
  
    const closeShareBackground = (e) => {
        console.log(modalRef.current)
        if(modalRef.current === e.target){
            document.body.style.overflow = "scroll"
            setShareIsOpen(false) 
        }
    }

    const closeShare = () => {
        document.body.style.overflow = "scroll"
        setShareIsOpen(false) 
    }

    let isCopiedText = null;
    if(isCopied){
        isCopiedText = (<p className="share__succes">Link gekopieerd!</p>)
    }    

    let conent = null
    if(shareIsOpen){
        conent = (
        <section ref={modalRef} onClick={closeShareBackground} className="share__background">
            <article className="share">
                <figure ref={modalRef} onClick={closeShare} className="share__x">+</figure>
                <h1 className="share__title">Deel Jouw collectie!</h1>
                <p className="share__p">Kopieer de onderstaande link om jouw collectie met je vrienden te delen.</p>
                <h2 className="share__link">{url}</h2>
                <button onClick={copyLink} className="button">Kopieer link</button>
                {isCopiedText}
            </article>
        </section>
    )
    }
    return(
        <>
        {conent}
        </>
    )
}

export default Share;