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
    console.log('entro0');
    console.log(this.props.location.search.split("=")[1]);
    this.setState({ 'search': this.props.location.search.split("=")[1] }, () => {
      this.getItems();
    });
  }

  componentDidUpdate(prevProps) {
    
  }

  componentWillReceiveProps(nextProps) {
    console.log('entro2');
    console.log(this.state.search);
    console.log(nextProps.location.search.split("=")[1]);

    var searchQuery = nextProps.location.search.split("=")[1];

    if (searchQuery != this.state.search) {
      this.setState({ 'search': searchQuery }, () => {
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
