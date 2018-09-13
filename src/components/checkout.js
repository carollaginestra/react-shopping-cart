import React, { Component } from 'react';
import Product from './product';
import Product1 from './../images/prod1.jpg';
import Product2 from './../images/prod2.jpg';

class Checkout extends Component {

    // static propTypes = {
    //     price: PropTypes.number.isRequired,
    // }
    
    render() {
        return (
            <main>
                <Product
                image={Product1}
                category="Men's Tee"
                prodName="Endless possibilities T"
                price={"$" + 110}
                />

                <Product
                image={Product2}
                category="Men's Tee"
                prodName="Never say never T"
                price={"$" + 56}
                />

                <ul className="box-content flex-wrap list-nonstyle">
                <li className="w-100 list-item">
                    <a href="#" className="flex justify-between grey-text medium">
                    Address <i className="fas fa-long-arrow-alt-right" />
                    </a>
                </li>
                <li className="w-100 list-item">
                    <a href="#" className="flex justify-between grey-text medium">
                    Payment <i className="fas fa-long-arrow-alt-right" />
                    </a>
                </li>
                <li className="w-100 list-item">
                    <a href="#" className="flex justify-between grey-text light">
                    Shipping <span>Free</span>
                    </a>
                </li>
                <li className="w-100 list-item">
                    <a href="#" className="flex justify-between blue-text bold-text">
                    Total <span>$166</span>
                    </a>
                </li>
                </ul>

                <OrderButton />

            </main>
        );
    }
}

class OrderButton extends Component {
constructor(){
    super();

    this.state = {
        blue: true
    }
    }

    changeColor(){
    this.setState({blue: !this.state.blue})
    }

    render(){
    let btn_class = this.state.blue ? "blue-button" : "light-button";

    return (
        <div>
        <button className={btn_class}
            onClick={this.changeColor.bind(this)} type="submit">
            Place Order
        </button>
        </div>
        )
    }
}

export default Checkout;
