import React, { Component } from 'react';
import { render } from 'react-dom';

import Item from './item.jsx';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      categories: [],
      items: []
    };

    this.getItems = this.getItems.bind(this);
  }

  componentWillMount() {
    var searchQuery = this.props.location.search.split("=")[1];

    this.setState({ 'search': (searchQuery != null) ? searchQuery : '' }, () => {
      this.getItems();
    });
  }

  componentWillReceiveProps(nextProps) {
    var searchQuery = nextProps.location.search.split("=")[1];

    if (searchQuery != this.state.search) {
      this.setState({ 'search': searchQuery }, () => {
        this.getItems();
      });
    }
  }

  getItems() {
    fetch(`/api/items?q=:${this.state.search}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        items: data.items,
        categories: data.categories
      });
    })
    .catch((err) => {
      console.log('Response error:' + err.message);
    });
  }

  render() {
    var items = this.state.items;

    if (items.length > 0) {
      const listItems = items.map((item) => {
        return(<Item key={item.id} item={item} price={item.price.amount} />);
      });

      return (
        <div className='container'>
          <div className='row category-item'>
            {
              this.state.categories.slice(0,6).map(function(item, index) {
                return <p key={index}> { (index ? ' > ' : '') + item } &nbsp;</p>;
              })
            }
          </div>
          <div className='row justify-content-center backgroundWhite'>
            <div className='col-md-10'>
              {listItems}
            </div>
          </div>
        </div>
      );
    } else {
      return(<p>No hay resultados</p>);
    }
  }
}

export default SearchList;
