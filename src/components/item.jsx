import React, { Component } from 'react';
import { render } from 'react-dom';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      title: this.props.item.title,
      price: this.props.item.price,
      thumbnail: this.props.item.thumbnail,
      condition: this.props.item.condition,
      free_shipping: this.props.item.shipping.free_shipping,
      address: this.props.item.address.state_name
    };
  }

  render() {
    return (
      <div>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <img src={this.state.thumbnail} style={{width: '180px', height: '180px', borderRadius: '4px'}} />
          </div>
          <div className='col-md-6'>
            <p>{this.state.price}</p>
            <a href=''>
              <p>{this.state.title}</p>
            </a>
          </div>
          <div className='col-md-2'>
            <p>{this.state.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
