import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import { selectCartProducts, sortProducts } from '../../store/cart/selectors';
import { removeProduct, removeAllProducts, fetchProducts } from '../../store/cart/actions';
import Message from '../Message';
import Button from '../Button';
import Sort from '../Sort';

class Products extends React.Component {

    state  = {
        loading: false,
    }
    
    componentWillMount() {
        const { sort } = this.props;
    
        this.handleFetchProducts(sort);
    }
    
    componentWillReceiveProps(nextProps) {
        const { sort: nextSort } = nextProps;
    
        if (nextSort !== this.props.sort) {
            this.handleFetchProducts( undefined, nextSort);
        }
    }
    
    handleFetchProducts = (sort = this.props.sort) => {
        this.setState({ loading: true });
        this.props.fetchProducts(sort, () => {
            this.setState({ loading: false });
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

    render() {
        const { products } = this.props;

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

                {
                    products.length &&
                    products.map((product, index) => (
                        <Product
                            {...product}
                            key={index}
                            onDelete={this.onRemoveProduct(product)}
                        />
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: selectCartProducts(state),
    sort: sortProducts(state),
});

const mapDispatchToProps = {
    removeProduct,
    removeAllProducts,
    fetchProducts
};

const Connect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default Connect(Products);
