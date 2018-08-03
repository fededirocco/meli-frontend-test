import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBar from './components/searchBar.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      query: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(search) {
    this.setState({ search: search, query: `/items?search=${search}` });
    console.log(this);
  }

  render() {
    return (
      <SearchBar
        search={this.state.search}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default App;
