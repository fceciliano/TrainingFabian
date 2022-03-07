import React from 'react';
import Image from '../../../atoms/Image';
import ListNavbar from '../../../atoms/utilities/ListNavbar';
import './styles.scss'

const NavBar = ({navBar}) => {
    return (
        <div className="nav-bar">
            <div className="nav-bar__icon" >
                {/* <span className="material-icons">menu</span> */}
                <img className="nav-bar__img" src={navBar.iconMenu.imgSrc} imgAlt={navBar.image.imgAlt} />
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