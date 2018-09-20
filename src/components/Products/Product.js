import React from 'react';

const Product = ({ image, category, prodName, price }) => (
    <div className="box-content">
        <img src={image} className="product-image" alt="" />
        <div className="product-box">
            <div className="product-category">{category}</div>
            <div className="product-name">{prodName}</div>
            <div className="blue-text bold-text">${price}</div>
        </div>
    </div>
);

export default Product;
