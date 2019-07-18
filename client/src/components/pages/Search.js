import React, { Component } from 'react';
import Result from '../Result/index'

class Saved extends Component {
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

export default Saved;