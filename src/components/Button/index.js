import React from 'react';
import ButtonR from './Button';

const buttons = [
    {
        text: "Place Order",
        size: "lg",
        color: "primary",
        type: "submit"
    }
];

class Button extends React.Component {
    render() {
        return(
            <div>
                {buttons.map((button, index) => (
                    <ButtonR {...button} key={index} />
                ))}
            </div>
        );
    }
}

export default Button;
