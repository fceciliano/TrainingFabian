import React from 'react';
import Image from '../../atoms/Image';
import './CardsStyle.scss'

const CardIsland = ({island}) => {
    return (
        <div className='card'>
            <Image imgAlt={island.imgAlt} imgSrc={island.imgSrc} imgClass={island.imgClass}/>
            <div className="card-island">
                <div className="card-island__name">{island.name}</div>
                <div className="card-island__location"><span  className="material-icons">fmd_good</span>{island.location}</div>
            </div>
        </div>
    );
};

export default CardIsland;