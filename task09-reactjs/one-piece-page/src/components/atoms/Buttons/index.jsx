import React, { useState } from 'react';
import './styles.scss'

const SypnosisButton = ({text,setactiveClass,activeClass,setActiveImage,valImage}) => {
    
    const [btnName, setBtnName] = useState(text);

    const change = () => {
        if(activeClass === "header__moreText"){
            setactiveClass(activeClass = "header__lessText" );
            setActiveImage(valImage = "hiden-image");
            setBtnName(btnName = "Read Less");
        }else{
            setactiveClass(activeClass = "header__moreText" );
            setActiveImage(valImage = "inactive");
            setBtnName(btnName = "Read More");
        }
    }

    return (
        <div className="read-btn" onClick = {() => change()}>
            <i className="read-btn__icon material-icons">expand_more</i>
            <span className="read-btn__text">{btnName}</span>
        </div>
    );
};

export default SypnosisButton;