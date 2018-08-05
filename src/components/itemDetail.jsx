import React, { Component } from 'react';
import { render } from 'react-dom';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      item: '',
      description: ''
    };

    this.getItemData = this.getItemData.bind(this);
  }

  componentDidMount() {
    this.getItemData();
  }

  getItemData() {
    fetch('https://api.mercadolibre.com/items/' + this.state.id)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      this.setState({ item: data });
    })
    .then(() => {
      fetch('https://api.mercadolibre.com/items/' + this.state.id + '/description')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({ description: data.plain_text });
      })
    })


    .catch((err) => {
      console.log('Response error:' + err.message);
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center' style={{backgroundColor: '#EEEEEE'}}>
          <div className='col-md-8'>
            {/* <img src={this.state.item.pictures[0].url} style={{width: '680px'}} /> */}
          </div>
          <div className='col-md-4'>
            {this.state.item.title}
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <span>Descripción del producto</span>
            <p>{this.state.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
