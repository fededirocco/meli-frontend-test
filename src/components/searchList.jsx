import React, { Component } from 'react';
import { render } from 'react-dom';

import Item from './item.jsx';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      categories: [],
      items: [],
    };

    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    var searchQuery = this.props.location.search.split("=")[1];

    this.setState({ 'search': (searchQuery != null) ? searchQuery : '' }, () => {
      this.getItems();
    });
  }

  componentDidUpdate(prevProps) {

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
      this.setState({ items: data.items });
    })
    .catch((err) => {
      console.log('Response error:' + err.message);
    });
  }

  render() {
    const items = this.state.items;

    if (items.length > 0) {
      const listItems = items.map((item) => {
        return(<Item key={item.id} item={item} />);
      });

      return (
        <div className='container'>
          <div className='row justify-content-center' style={{backgroundColor: '#EEEEEE'}}>
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
