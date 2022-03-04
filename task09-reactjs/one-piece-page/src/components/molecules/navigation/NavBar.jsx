import React from 'react';
import Image from '../../atoms/Image';
import ListNavbar from '../../atoms/utilities/ListNavbar';
import './Styles.scss'

const NavBar = ({navBar}) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__icon" >
                <span className="material-icons">menu</span>
            </div>

            <Image imgAlt={navBar.image.imgAlt} imgSrc={navBar.image.imgSrc} imgClass={navBar.image.imgClass}/>

            <div className="nav-bar__list">
                <ListNavbar navlist={navBar.navlist} flaglist={navBar.flaglist}/>
            </div>

            <span></span>
        </div>
    );
};

export default NavBar;