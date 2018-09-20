import React from 'react';

const ButtonR = ({color, size, text, type, disabled}) => {
    const sizeClass = size ? `btn-${size}` : ''
    
    return (
        <button type={type}
            className={`btn btn-${color} ${sizeClass}`}  disabled={disabled}>
            {text}
        </button>
    )
}
    

export default ButtonR;