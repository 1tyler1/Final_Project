import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={LoginPage} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
