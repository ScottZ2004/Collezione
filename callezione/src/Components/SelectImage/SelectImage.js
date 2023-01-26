import "./SelectImage.css";
import CollectionContext from "../../Context/CollectionContext";
import {useContext, useRef} from "react";
import images from "../../data/images";

const SelectImage = () => {
    const modalRef = useRef();
    const {selectImageIsOpen, setSelecteImageIsOpen} = useContext(CollectionContext);

    const closeSelectImageBackground = (e) => {
        if(modalRef.current === e.target){
            document.body.style.overflow = "scroll"
            setSelecteImageIsOpen(false) 
        }
    }

    const closeSelectImage = () => {
        document.body.style.overflow = "scroll"
        setSelecteImageIsOpen(false) 
    }
    let i = 0
    const imagesToBeRendered = images.images.map(image => {
        i++
        return(
            <div className="selectimage__imageContainer selectimage__imageContainer--selected">
                <img src={image} alt={i} className="selectimage__image " />
            </div>
        )
    })

    if(selectImageIsOpen){
        return(
            <section onClick={closeSelectImageBackground} ref={modalRef} className="selectimage">
                <article className="selectimage__article">
                    <p onClick={closeSelectImage} className="selectimage__x">×</p>
                    <h1 className="selectimage__heading">Selecteer hier een afbeelding!</h1>
                    <div className="selectimage__imagesContainer">
                        {imagesToBeRendered}
                    </div>
                </article>
            </section>
        ) 
    }
    return(
        <></>
    ) 
}

export default SelectImage;