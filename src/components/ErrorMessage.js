import React from 'react';
import img from '../error.png'; // вышли из папки и на этом же уровне подхватили картинку

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error"></img>
        </>
    )
}

export default ErrorMessage;
