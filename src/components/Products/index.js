import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { selectCartProducts } from '../../store/cart/selectors';
import { removeProduct, removeAllProducts } from '../../store/cart/actions';
import Message from '../Message';
import Button from '../Button';

class Products extends React.Component {
    state = {
        // 0 - sem sort
        // -1 - menor -> maior
        // 1 -> maior -> menor
        productsBackup: this.props.products,
        products: this.props.products,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            productsBackup: nextProps.products,
            products: nextProps.products,
        });
    }

    onRemoveProduct = product => event => {
        event.preventDefault();

        this.props.removeProduct(product.id);
    };

    onRemoveAllProducts = e => {
        e.preventDefault();

        this.props.removeAllProducts();
    };

    onSort = sort => () => {
        // reset
        if (sort === 0) {
            this.setState({ products: this.state.productsBackup });
        }

        // menor -> maior
        if (sort === -1) {
            this.setState({
                products: this.state.products.sort(
                    (a, b) => a.price >= b.price,
                ),
            });
        }

        // maior -> menor
        if (sort === 1) {
            this.setState({
                products: this.state.products.sort(
                    (a, b) => a.price <= b.price,
                ),
            });
        }
    };

    render() {
        const { products = [] } = this.state;

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

                <Button
                    type="button"
                    size="lg"
                    onClick={this.onSort(-1)}
                    secondary
                >
                    Sort menor -> maior
                </Button>

                <Button
                    type="button"
                    size="lg"
                    onClick={this.onSort(1)}
                    secondary
                >
                    Sort maior -> menor
                </Button>

                <Button
                    type="button"
                    size="lg"
                    onClick={this.onSort(0)}
                    secondary
                >
                    Reset sort
                </Button>

                {products.length &&
                    products.map((product, index) => (
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

const mapStateToProps = state => ({
    products: selectCartProducts(state),
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
