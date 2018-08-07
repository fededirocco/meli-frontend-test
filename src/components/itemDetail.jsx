import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      item: '',
      categories: ''
    };

    this.getItemData = this.getItemData.bind(this);
  }

  componentDidMount() {
    this.getItemData();
  }

  getItemData() {
    fetch(`/api/items/​${this.state.id}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      this.setState({
        item: data.item
      });
    })
    .then(() => {
      fetch(`/api/categories/​${this.state.id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({ categories: data });
      })
    })
    .catch((err) => {
      console.log('Response error:' + err.message);
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row category-item'>{this.state.item.categories}</div>
        <div className='row justify-content-center backgroundWhite'>
          <div className='col-md-8'>
            <img src={this.state.item.picture} className='img-detail-item' />
          </div>
          <div className='col-md-4 title-detail'>
            <p className='condition-quantity-item'>{this.state.item.condition} - {this.state.item.sold_quantity} vendidos</p>
            <p className='title-item-detail'>{this.state.item.title}</p>
            <p className='price-detail'>$ {this.state.price}</p>
            <div className='btn-comprar'>
              <Button bsStyle='primary' bsSize='large' block>Comprar</Button>
            </div>
          </div>
        </div>
        <div className='row backgroundWhite padding-description'>
          <div className='col-md-8'>
            <p className='title-description'>Descripción del producto</p>
            <p className='text-description'>{this.state.item.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
