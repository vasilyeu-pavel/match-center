import React, { Component } from 'react';
import './style.css'
import McHeader from './mc-header/mc-header'
import Slider from './slider/Slider'

class Header extends Component {
  render() {
    return (
      <div className="container mb-3">
      		<McHeader />
        	<Slider />
      </div>
    );
  }
}

export default Header;
