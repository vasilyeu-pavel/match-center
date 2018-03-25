import React, { Component } from 'react';
import HeaderSelect from './header-select'
import './style.css'

class McHeader extends Component {
  render() {
    return (
      <div className = "mcHeader-container">
        	<div className = "logo" >logo</div>
        	<HeaderSelect />
      </div>
    );
  }
}

export default McHeader;
