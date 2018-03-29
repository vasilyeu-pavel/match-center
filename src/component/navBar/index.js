import React, { Component } from 'react';
import './style.css'
import NavBarSelect from './navbar-select'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar box-shadow mb-3">
        	<div className = "navbar-select">
        		<span>Language:</span>
        		<NavBarSelect />
        	</div>
      </div>
    );
  }
}

export default NavBar;
