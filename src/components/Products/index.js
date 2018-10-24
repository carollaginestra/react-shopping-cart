import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { selectCartProducts } from '../../store/cart/selectors';
import { removeProduct } from '../../store/cart/actions';

class Products extends React.Component {

    onRemoveProduct = (product) => {
        this.props.removeProduct(product)
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                { products.length > 0 ? 
                    (products.map((product, index) => (
                        <Product {...product} key={index}
                        onClick={()=> this.onRemoveProduct(...product)} />
                    )))
                    : <div>0 registered products</div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: selectCartProducts(state),
});

const mapDispatchToProps = {
    removeProduct
};

const Connect = connect(mapStateToProps, mapDispatchToProps);

export default Connect(Products);
