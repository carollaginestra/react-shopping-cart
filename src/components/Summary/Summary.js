import React from 'react';
import { Link } from 'react-router-dom';


const SummaryList = ({ href = '#', item, children }) => (

    <li className="w-100 list-item">
        <Link to={href} className="flex justify-between grey-text medium">
            {children}
            <span>{item}</span>
        </Link>
    </li>

);


export default SummaryList;
