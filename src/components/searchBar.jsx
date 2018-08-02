import React, { Component } from 'react';
import { render } from 'react-dom';

//const logoML = require('/img/Logo_ML.png');

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  //get search text
  handleSubmit(e) {
    alert('A search text was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-md-10" style={{backgroundColor: "#FFE600"}}>
        <img src="/img/Logo_ML.png" alt="MercadoLibre" />
        <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              size='18'
              placeholder='Nunca dejes de buscar'
              value={this.state.value}
              onChange={this.handleChange}
            />
          <button type="submit" value="Submit"> Search </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
