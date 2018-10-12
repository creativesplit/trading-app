import React, { Component } from 'react';
import './dashboard.css'
import listOfStocks from '../Data/stock-data.json'


//let  showStocks = listofStocks



class App extends Component {
    constructor(props){
      super(props)
  
      this.state = {
          stocks: null,
      }
    }
    render() {
      return (
        <div >
    
        </div>
      );
    }
  }
  
  export default App;