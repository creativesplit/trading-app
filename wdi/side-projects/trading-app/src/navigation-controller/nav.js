import React, { Component } from 'react';
import './nav.css';


class Nav extends Component {
    constructor(props){
        super(props)
    
        this.state = {

        }
    }
  render() {
    return (
      <div className='nav-container'>
        <a className='Home' href='#'>Home</a>
        <a className='About' href='#'>About</a>
      </div>
    );
  }
}

export default Nav;
