import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import {
    selectCartSortedProducts,
    selectCartSort,
} from '../../store/cart/selectors';
import { removeProduct, removeAllProducts } from '../../store/cart/actions';
import Message from '../Message';
import Button from '../Button';
import Sort from '../Sort';

class Products extends React.Component {
    state = {
        loading: false,
    };

    onRemoveProduct = product => event => {
        event.preventDefault();

        this.props.removeProduct(product.id);
    };

    onRemoveAllProducts = e => {
        e.preventDefault();

        this.props.removeAllProducts();
    };

    render() {
        const { products = [] } = this.props;

        if (!products.length) {
            return <Message>0 products in your cart, add some.</Message>;
        }

        return (
            <div>
                <Button
                    type="button"
                    size="lg"
                    onClick={this.onRemoveAllProducts}
                    secondary
                >
                    Remove all products
                </Button>

                <Sort />

                {products.map((product, index) => (
                    <Product
                        {...product}
                        key={index}
                        onDelete={this.onRemoveProduct(product)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = store => ({
    products: selectCartSortedProducts(store),
    sort: selectCartSort(store),
});

const mapDispatchToProps = {
    removeProduct,
    removeAllProducts,
};

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default Connect(Products);
