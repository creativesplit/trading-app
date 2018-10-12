import React, { Component } from 'react';
import './App.css';
import Nav from './navigation-controller/nav.js'
import Dashboard from './dashboard/dashboard.js'
import { Route, Link, Switch, Redirect} from 'react-router-dom'
import About from './about/about'


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
      <main>  
      <Switch>
        <Route path='/stocks' component={Dashboard} />
        <Route path='/about' compnent={About} />
        <Route path='/'  render={(props) =>(<Redirect to='/stocks'/>)}/>
        <Route path='/stocks/:symbol' />
      </Switch>
     </main>
      </div>
      )
    
  }
}

export default App;
