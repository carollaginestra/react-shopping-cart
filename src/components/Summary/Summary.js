import React from 'react';

const SummaryList = ({ href = '#', item, result }) => (

    <li className="w-100 list-item">
        <a href={href}
            className="flex justify-between grey-text medium">
            {item}
            <span>{result}</span>
        </a>
    </li>

);


export default SummaryList;
