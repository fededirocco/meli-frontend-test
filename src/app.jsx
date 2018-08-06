import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Link, withRouter } from 'react-router-dom';

import SearchBar from './components/searchBar.jsx';
import SearchList from './components/searchList.jsx';
import ItemDetail from './components/itemDetail.jsx';

const NotFound = () => (
  <h1>404.. This page is not found!</h1>
);

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
    this.props.history.push(`/items?search=${search}`);
  }

  render() {
    return (
      <div>
        <Route path="/" render={(props) => (
          <SearchBar search={this.state.search} onSubmit={this.handleSubmit} />
        )}/>
        <Switch>
          <Route exact path="/" render= { null } />
          <Route path='/items' component={ SearchList } />
          <Route exact path='/items/:id' component={ ItemDetail } />
          <Route path='*' component={ NotFound } />
        </Switch>
      </div>
    );
    // return(
    //   <ItemDetail
    //     id='MLA653282516'
    //   />);
  }
}

export default App;
