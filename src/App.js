import React, { Component } from 'react';
import Button from './components/Button';
import Summary from './components/Summary';
import Products from './components/Products';
import Header from './components/Header';

import './styles/css/style.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header title="Checkout" />

                <main>
                    <Products />

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
                    
                </main>
            </div>
        );
    }
}

export default App;
