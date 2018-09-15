import React, { Component } from 'react';
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

                  {/* <Button /> */}
                </main>
            </div>
        );
    }
}

export default App;
