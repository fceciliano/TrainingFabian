import React from 'react';
import Image from '../../atoms/Image';
import './Styles.scss'

const ListNavbar = ({navlist, flaglist}) => {
    return (
        <ul className="list-nav">
            {navlist.map(item => (
                <li key={item.id} className="list-nav__page"><a href={item.link}>{item.page}</a></li>
            ))}
            {flaglist.map(item => (
                <li key={item.id} className="list-nav__flag">
                    <Image  imgAlt={item.imgAlt} imgSrc={item.imgSrc} imgClass={item.imgClass}/>
                </li>
            ))}
        </ul>
    );
};

export default ListNavbar;
