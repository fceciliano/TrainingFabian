import React from 'react';
import './styles.scss'

const CardsHeader = ({headerName}) => {
    return (
        <div className="cards-header">
            <div className="cards-header__name">{headerName}</div>
            <div className="cards-header__all">See all</div>
        </div>
    );
};

export default CardsHeader;
