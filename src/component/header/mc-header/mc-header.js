import React, { Component } from 'react';
import HeaderSelect from './header-select'
import { connect } from 'react-redux';
import './style.css'

class McHeader extends Component {
  render() {
  	const {legue} = this.props

    return (
      <div className = "mcHeader-container">
        	<div className = "logo" >{legue.name}</div>
        	<HeaderSelect legue = {legue}/>
      </div>
    );
  }
}

export default connect((state) => ({
	legue: state.legue
}))(McHeader);
