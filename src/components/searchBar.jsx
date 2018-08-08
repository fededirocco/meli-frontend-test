import React, { Component } from 'react';
import { render } from 'react-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.search };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-center searchbar'>
          <div className='col-md-10'>
            <div className='row justify-content-center' style={{marginTop: '10px'}}>
              <div className='col-md-auto col-sm-auto'>
                <img src='../img/Logo_ML.png' alt='MercadoLibre' />
              </div>
              <div className='col-md-10'>
                <form className='searchbar-form' onSubmit={this.handleSubmit}>
                    <input
                      className='searchbar-input'
                      type='text'
                      placeholder='Nunca dejes de buscar'
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  <button className='btn btn-search' type="submit" value="Submit">
                    <img src='../img/ic_Search.png' alt='MercadoLibreSearch' />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
