import React, { Component } from 'react';
import Products from './components/Products';
import Header from './components/Header';

import './styles/css/style.css';

class App extends Component {
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     toggle: true,
    //     labelText: "",
    //   }
    // }

    // setLabelText = (labelText) => {
    //   this.setState({labelText})
    // }

    // toggle = () => {
    //   this.setState({
    //     toggle: !this.state.toggle
    //   });
    // }

    /*   {this.state.toggle &&
          <p>Toggle content</p>
        }
        <Product text={this.state.labelText} />
        <OrderButton handleClick={this.setLabelText} label="Botão 1" />

        onClick={this.toggle} */

    render() {
        return (
            <div className="container">
                <Header title="Checkout" />

                <main>
                  <Products />

                  {/* <Summary />

                  <Button /> */}
                </main>
            </div>
        );
    }
}

export default App;
