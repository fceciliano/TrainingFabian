import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Image = ({imgAlt, imgSrc, imgClass}) => {
    return <img alt={imgAlt} src={imgSrc} className={imgClass}/>;
};

Image.propTypes = {
    imgAlt: PropTypes.any, 
    imgSrc: PropTypes.string, 
    imgClass: PropTypes.string
}

export default Image;
