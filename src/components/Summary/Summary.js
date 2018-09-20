import React from 'react';

const SummaryList = ({ href = '#', item, children }) => (

    <li className="w-100 list-item">
        <a href={href}
            className="flex justify-between grey-text medium">
            {children}
            <span>{item}</span>
        </a>
    </li>

);


export default SummaryList;
