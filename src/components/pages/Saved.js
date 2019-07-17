import React, { Component } from 'react';
import Result from '../Result/index'

class Search extends Component {
  render() {
    return (
      <div>
        <h2>Saved</h2>
        <Result />
        <Result />
        <Result />
      </div>
    );
  }
}

export default Search;