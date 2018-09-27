import React, { Component } from 'react';
import Button from './components/Button';
import Summary from './components/Summary';
import Products from './components/Products';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom'


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
                        type="button"
                        size="lg"
                        onClick={() => alert('Pagamento confirmado!')}
                        primary
                    >
                        Place Order
                    </Button>
                    <Button size="lg" secondary>
                        Cancel
                    </Button>

                    <BrowserRouter>
                        <Main />
                    </BrowserRouter>
                    
                </main>
            </div>
        );
    }
}

// https://codesandbox.io/s/vvoqvk78?from-embed
// https://codepen.io/quinlo/pen/YONMEa

// https://blog.dmatoso.com/react-tipos-de-componentes-container-e-apresenta%C3%A7%C3%A3o-83aadd5a541a
export default App;
