import React from 'react';
import Product from './Product';

import Product1 from '../../images/prod1.jpg';
import Product2 from '../../images/prod2.jpg';

const products = [
    {
        image: Product1,
        category: 'Men Tee',
        prodName: 'Endless possibilities T',
        price: 100,
    },
    {
        image: Product2,
        category: 'Men Tee',
        prodName: 'Never say never T',
        price: 56,
    },
];

class Products extends React.Component {
    render() {
        return (
            <div>
                {products.map((product, index) => (
                    <Product {...product} key={index} />
                ))}
            </div>
        );
    }
}

export default Products;
