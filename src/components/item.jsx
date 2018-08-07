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
    return (
      <div>
        <hr />
        <div className='row'>
          <div className='col-md-4'>
            <img src={this.state.picture} style={{width: '180px', height: '180px', borderRadius: '4px'}} />
          </div>
          <div className='col-md-6'>
            <p>{this.state.price}</p>
            <Link to={`/items/${this.state.id}`}>{this.state.title}</Link>
          </div>
          <div className='col-md-2'>
            <p>{this.state.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
