import React, { Component } from 'react';
import './App.css';

//import Home from '../Home/Home'
// import { Route, Link, Switch} from 'react-router-dom'
// import Currencies from '../Currencies/Currencies'
// import Price from '../Price/Price'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
