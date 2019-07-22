import React, { Component } from 'react';
import Result from '../Result/index'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: [],
      lastQuery: ''
    };
  }

  search() {
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${URL}${this.state.query}`, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        let { items } = json;
        this.setState({ items });
        this.setState({ lastQuery: this.state.query });
        console.log(json);
      });
  }


  render() {
    return (
      <div>
        <div className="row mb-3">
          <div className="col-md-6 mx-auto">
            <div class="card">
              <h3 class="card-header">Book Search</h3>
              <div class="card-body">
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control w-100" type="search" placeholder="Book Title" aria-label="Search" />
                  <button class="btn btn-outline-secondary mt-3 mx-auto" type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <h3>Results</h3>
        <Result />
        <Result />
      </div>


    );
  }
}

export default Search;