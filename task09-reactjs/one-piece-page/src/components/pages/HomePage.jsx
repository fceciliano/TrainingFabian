import React from 'react';
import HomePageTemp from '../templates/HomePageTemp';

const HomePage = ({information}) => {
    return (
        <>
        <HomePageTemp navBar={information.navBar} 
        footer={information.footer} 
        mainImage={information.mainImage} 
        synopsis={information.synopsis} 
        heroes={information.heroes} 
        islands={information.islands} 
        objects={information.objects}/>
        </>
    );
};

export default HomePage;

