import React from 'react';
import Image from '../../../atoms/Image';
import './styles.scss'

const CardHero = ({hero}) => {
    return (
        <div className='card'>
            <Image imgAlt={hero.imgAlt} imgSrc={hero.imgSrc} imgClass={hero.imgClass}/>
            <div className='card__image-name'>{hero.name}</div>
        </div>
    );
};

export default CardHero;