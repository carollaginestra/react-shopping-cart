import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './components/Button';
import Summary from './components/Summary';
import Products from './components/Products';
import Header from './components/Header';
import { addProduct } from './store/cart/actions';
import { removeProduct } from './store/cart/actions';
import Product1 from './images/prod1.jpg';

import './styles/css/style.css';

class App extends Component {
    onAddProduct = (e) => {
        const { addProduct } = this.props;

        e.preventDefault();

        addProduct({
            image: Product1,
            category: 'Blusa',
            price: (Math.random() * 1000).toFixed(2),
            prodName: 'Blusinha da Moda',
        });
    };

    
    onRemoveProduct = ({id, dispatch, e}) => {

        let { removeProduct } = this.props;

        e.preventDefault();

        removeProduct({
            onClick: dispatch(removeProduct(id))
        });

    }

    render() {
        return (
            <div className="container">
                <Header title="Checkout" />

                <main>
                    <Products/>

                    <Summary />

                    <Button
                        type="submit"
                        size="lg"
                        onClick={() => alert('Pagamento confirmado!')}
                        primary
                    >
                        Place Order
                    </Button>
                    <Button type="button" size="lg" secondary>
                        Cancel
                    </Button>
                    <Button type="button" size="lg" onClick={this.onAddProduct} secondary>
                        Add Test Product
                    </Button>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addProduct,
    removeProduct
};

// 1. state to props
// 2. dispatch to pros
// 3. merge props
// 4. options
const Connect = connect(null, mapDispatchToProps);

export default Connect(App);
