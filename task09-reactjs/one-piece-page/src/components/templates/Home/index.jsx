import React from 'react';
import NavBar from '../../molecules/navigation/NavBar/index';
import Image from '../../atoms/Image';
import Synopsis from '../../organisms/Synopsis/index';
import InputText from '../../atoms/utilities/InputText';
import ListCard from '../../organisms/listsCard/index';
import Footer from '../../molecules/navigation/Footer';
import './styles.scss'

const HomePageTemp = ({navBar, footer, mainImage, synopsis, heroes, islands, objects}) => {
    return (
        <>
        <div className="main-navbar">
            <NavBar navBar={navBar}/>
        </div>

        <div className="main-synopsis">
            <Image imgAlt= {mainImage.imgAlt} imgSrc={mainImage.imgSrc} imgClass={mainImage.imgClass}/>
            <div className="main-synopsis__text">
                <Synopsis synopsis={synopsis}/>
            </div>
        </div>

        <div className="main-body">
            <InputText placeholder={"Search Characters, Islands or Objects"}/>
            <ListCard headerName={"Characters"} listElements={heroes}/>
            <ListCard headerName={"Islands"} listElements={islands}/>
            <ListCard headerName={"Mist Objects"} listElements={objects}/>
        </div>

        <Footer footer={footer}/>
        </>
    );
};

export default HomePageTemp;

