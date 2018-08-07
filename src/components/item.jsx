import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      title: this.props.item.title,
      price: '',
      picture: this.props.item.picture,
      condition: this.props.item.condition,
      free_shipping: this.props.item.free_shipping,
      location: this.props.item.location
    };
  }

  render() {
    let shippingLogo;
    if (this.state.free_shipping) {
      shippingLogo = <img src='../img/ic_shipping.png' />
    }

    return (
      <div className='padding-item'>
        <hr />
        <div className='row'>
          <div className='col-md-3 padding-picture'>
            <img className='picture-item' src={this.state.picture} />
          </div>
          <div className='col-md-7'>
            <p className='price-item margin-titleprice'>$ {this.state.price} {shippingLogo}</p>
            <Link className='title-item' to={`/items/${this.state.id}`}>{this.state.title}</Link>
          </div>
          <div className='col-md-2'>
            <p className='location-item'>{this.state.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
