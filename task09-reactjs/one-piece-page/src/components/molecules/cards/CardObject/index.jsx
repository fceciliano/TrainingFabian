import React from 'react';
import Image from '../../../atoms/Image';
import './styles.scss'

const CardObject = ({object}) => {
    return (
        <div className='card card-size'>
            <div className="card-object-image">
                <Image imgAlt={object.imgAlt} imgSrc={object.imgSrc} imgClass={object.imgClass}/>
            </div>
            <div className="card-object">
                <div className="card-object__title">{object.title}</div>
                <div className="card-object__text">{object.text}</div>
            </div>
        </div>
    );
};

export default CardObject;
