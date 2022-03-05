import React from 'react';
import Image from '../../../atoms/Image';
import './styles.scss'

const Footer = ({footer}) => {
    return (
        <div className="footer">
            <div className="footer__image">
                <Image imgAlt={footer.image.imgAlt} imgSrc={footer.image.imgSrc} imgClass={footer.image.imgClass}/>
            </div>
            <div className="footer__text">{footer.text}</div>
        </div>
    );
};

export default Footer;

