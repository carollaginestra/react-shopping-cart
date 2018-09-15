import React from 'react';

const Header = ({ href = '#', title }) => (
    <header className="flex-header">
        <a href={href}>
            <i className="fas fa-long-arrow-alt-left header-icon blue-text" />
        </a>

        <div className="page-title center">
            <h1>{title}</h1>
        </div>
    </header>
);

export default Header;
