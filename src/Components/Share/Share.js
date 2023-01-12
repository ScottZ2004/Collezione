import { useState } from "react";
import "./Share.css"

const Share = () => {
    const [isCopied, setIsCopied] = useState(false)
    const copyLink = () => {
        navigator.clipboard.writeText("");
        setIsCopied(true)
    }

    let isCopiedText = null;
    if(isCopied){
        isCopiedText = (<p className="share__succes">Link gekopieerd!</p>)
    }
    return(
        <section className="share__background">
            <article className="share">
                <h1 className="share__title">Deel deze collectie!</h1>
                <p className="share__p">Kopieer de onderstaande link om deze collectie met je vrienden met je vriendenen/of famillie te delen</p>
                <h2 className="share__link">https://collezione/user/1/collection</h2>
                <button onClick={copyLink} className="button">Kopieer link</button>
                {isCopiedText}
            </article>
        </section>
    )
}

export default Share;