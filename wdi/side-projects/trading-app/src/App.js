import React, { Component } from 'react';
import './App.css';
import Nav from './navigation-controller/nav.js'
import Dashboard from '../dashboard/dashboard.js'
import { Route, Link, Switch} from 'react-router-dom'

//import Home from '../Home/Home'
// import { Route, Link, Switch} from 'react-router-dom'
// import Currencies from '../Currencies/Currencies'
// import Price from '../Price/Price'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div>
      <nav>
        <Nav />
        </nav>
      </div>
      <main>
        <Route path='/dashboard/dashboard.js' render{()}  Dashboard/>

      </main>
    );
  }
}

export default App;
