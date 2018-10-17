import React from 'react';
import { formatCurrency } from '../../utils/money';


const Product = ({ image, category, prodName, price = 0, onClick }) => (
    <div className="box-content">
        <div className="flex justify-between align-center w-100">
            <div className="flex align-center">
                <img src={image} className="product-image" alt="" />
                <div className="product-box">
                    <div className="product-category">{category}</div>
                    <div className="product-name">{prodName}</div>
                    <div className="blue-text bold-text">{formatCurrency(price)}</div>
                </div>
            </div>

            <button type="button" className="btn btn-secondary" onClick={onClick}>
                <i className="far fa-trash-alt grey-text light"></i>
            </button>
        </div>
    </div>
);

export default Product;
