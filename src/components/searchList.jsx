import React, { Component } from 'react';
import { render } from 'react-dom';

import Item from './item.jsx';

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.search,
      categories: [],
      items: [],
    };

    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  componentDidUpdate(prevProps) {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.search != this.state.search) {
      this.setState({ 'search': nextProps.search }, () => {
        this.getItems();
      });
    }
  }

  getItems() {
    //fetch(`/api/items?q=:${this.state.search}`)
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=​:${this.state.search}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({ items: data.results.slice(0,4) });
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
