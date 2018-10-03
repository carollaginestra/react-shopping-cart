import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ href = '#', title }) => (
    <header className="flex-header">
        <Link to={href}>
            <i className="fas fa-long-arrow-alt-left header-icon blue-text" />
        </Link>

        <div className="page-title center">
            <h1>{title}</h1>
        </div>
    </header>
);

export default Header;
