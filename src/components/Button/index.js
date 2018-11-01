import React from 'react';
import classnames from 'classnames';

const Button = ({ size, children, primary, secondary, ...props }) => {
    const buttonClass = classnames({
        'btn': true,
        'btn-lg': size === 'lg',
        'btn-md': size === 'md',
        'btn-sm': size === 'sm',
        'btn-primary': primary === true,
        'btn-secondary': secondary === true,
    });

    return (
        <button
            {...props}
            className={buttonClass}
        >
            {children}
        </button>
    );
};

export default Button;
