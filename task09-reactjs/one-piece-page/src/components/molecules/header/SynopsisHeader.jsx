import React from 'react';
import './HeaderStyle.scss'

const SynopsisHeader = ({synopsis,activeClase}) => {
    return (
        <div className="header">
            <div className="header__title">{synopsis.title}</div>
            <div className="header__text">
                 <span>Dawn Island is an island located in the East Blue and where the Goa Kingdom is situated.<br/><br/>It is the home island of Monkey D. Luffy and the starting point of his journey into piracy, as well as the home island of his father, Monkey D. Dragon.<br/></span>
                 <span className={activeClase}>This is also the adopted home of Portgas D. Ace after the death of his mother and the home of Sabo and his family.<br/><br/>Reverse Mountain is an extremely tall mountain at one of the points where the four Blues meet and is one of the two known entrances to the Grand Line.<br/><br/>It is located in the Red Line and is the geographical antipode of Mary Geoise.</span>
            </div>

        </div>
    );
};

export default SynopsisHeader;