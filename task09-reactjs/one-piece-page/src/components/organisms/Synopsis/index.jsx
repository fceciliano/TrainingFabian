import React, { useState } from 'react';
import Image from '../../atoms/Image';
import SynopsisHeader from '../../molecules/header/SynopsisHeader';
import SypnosisButton from '../../atoms/Buttons/index'
import './styles.scss'

const Synopsis = ({synopsis}) => {
    const [activeClass, setactiveClass] = useState("header__moreText");
    const [activeImage, setActiveImage] = useState("inactive");
    
    return (
        <>
        <div className={activeImage}>
            <Image imgAlt={synopsis.image.imgAlt} imgSrc={synopsis.image.imgSrc} imgClass={synopsis.image.imgClass}/>
        </div>
        <div className="synopsis">
            <div className="synopsis__tittle">Synopsis</div>
            <SynopsisHeader synopsis={synopsis} activeClase={activeClass}/>
            <hr/>
            <SypnosisButton text={synopsis.textButton} setactiveClass={setactiveClass} activeClass={activeClass} setActiveImage={setActiveImage} valImage={activeImage}/>
        </div>
        </>
    );
};

export default Synopsis;
