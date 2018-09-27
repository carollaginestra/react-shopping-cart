import React from 'react';

const SummaryList = ({ item, children }) => (

    <li className="w-100 list-item">
        <div className="flex justify-between grey-text medium">
            {children}
            <span>{item}</span>
        </div>
    </li>

);


export default SummaryList;
