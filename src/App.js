import React, { Component } from 'react';
import Checkout from './components/checkout';

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
        <header className="flex-header">
          <a href="#">
            <i className="fas fa-long-arrow-alt-left header-icon blue-text" />
          </a>

          <div className="page-title center">
            <h1>Checkout</h1>
          </div>
        </header>

        <Checkout />

      </div>
    );
  }
}


export default App;

