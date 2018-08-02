import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Button bsStyle='primary' bsSize='large'>Hello Word</Button>
    )
  }
}

export default App;
