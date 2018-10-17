import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { selectCartProducts } from '../../store/cart/selectors';

// import Product1 from '../../images/prod1.jpg';
// import Product2 from '../../images/prod2.jpg';

// const products = [
//     {
//         image: Product1,
//         category: 'Men Tee',
//         prodName: 'Endless possibilities T',
//         price: 100,
//     },
//     {
//         image: Product2,
//         category: 'Men Tee',
//         prodName: 'Never say never T',
//         price: 56,
//     },
// ];

class Products extends React.Component {
    render() {
        const { products } = this.props;

        return (
            <div>
                {products.map((product, id) => (
                    <Product {...product} key={id} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: selectCartProducts(state),
});

const Connect = connect(mapStateToProps);

export default Connect(Products);
