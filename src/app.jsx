import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchBar from './components/searchBar.jsx';
import SearchList from './components/searchList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(search) {
    this.setState({ search: search });
  }

  render() {

    if (this.state.search == '') {
      return (
        <div>
          <SearchBar
            search={this.state.search}
            onSubmit={this.handleSubmit}
          />
        </div>
      )
    } else {
      return (
        <div>
          <SearchBar
            search={this.state.search}
            onSubmit={this.handleSubmit}
          />
          <SearchList
            search={this.state.search}
          />
        </div>
      )
    }
  }
}

export default App;
