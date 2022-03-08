import React from 'react';
import './styles.scss';
import CardsHeader from '../../molecules/header/CardsHeader';
import CardHero from '../../molecules/cards/CardHero/index';
import CardIsland from '../../molecules/cards/CardIsland/index';
import CardObject from '../../molecules/cards/CardObject/index';

const ListCard = ({headerName, listElements}) => {
    if (headerName === "Characters") {
        return (
            <>
                <CardsHeader headerName={headerName}/>
                <div className="cards-container-scroll">
                    {listElements.map(item => (
                        <CardHero key={item.id} hero={item}/>
                    ))}
                </div>
            </>
        );
    }else if(headerName === "Islands"){
        return (
            <>
                <CardsHeader headerName={headerName}/>
                <div className="cards-container-scroll">
                    {listElements.map(item => (
                        <CardIsland key={item.id} island={item}/>
                    ))}
                </div>
            </>
        );
    }else{
        return (
            <>
                <CardsHeader headerName={headerName}/>
                <div className="cards-container-wrap">
                    {listElements.map(item => (
                        <CardObject key={item.id} object={item}/>
                    ))}
                </div>
            </>
        );
    }
};

export default ListCard;
