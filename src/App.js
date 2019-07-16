import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Search from './components/pages/Search'
import Saved from './components/pages/Saved'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
