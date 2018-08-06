import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Link, withRouter } from 'react-router-dom';

import SearchBar from './components/searchBar.jsx';
import SearchList from './components/searchList.jsx';
import ItemDetail from './components/itemDetail.jsx';

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
    console.log(this);
    this.props.history.push(`/items?search=${search}`);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={(props) => (
            <SearchBar search={this.state.search} onSubmit={this.handleSubmit} />
          )}/>
          <Route path='/items?search=:search' component={ SearchList } />
          <Route path='/items/:id' component={ ItemDetail } />
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
