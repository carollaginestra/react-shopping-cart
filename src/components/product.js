import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="box-content">
        <img src={this.props.image} className="product-image" />
        <div className="product-box">
          <div className="product-category">{this.props.category}</div>
          <div className="product-name">{this.props.prodName}</div>
          <div className="blue-text bold-text">{this.props.price}</div>
        </div>
      </div>
    );
  }
}

export default Product;