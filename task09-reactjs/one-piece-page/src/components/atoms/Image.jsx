import React from 'react';
import './ImageStyle.scss';

const Image = ({imgAlt, imgSrc, imgClass}) => {
    return <img alt={imgAlt} src={imgSrc} className={imgClass}/>;
};

export default Image;
