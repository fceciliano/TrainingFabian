import React from 'react';
import './styles.scss'

const InputText = ({placeholder}) => {
    return (
        <div className="input-container">
            <span  className="material-icons input-container__icon">search</span>
            <input className="input-container__input-field" type="text" placeholder={placeholder} />
        </div>
    );
};

export default InputText;
