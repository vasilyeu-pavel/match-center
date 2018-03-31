import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSelect from './header-select'
import { connect } from 'react-redux';
import './style.css'

class McHeader extends Component {
  static propTypes = {
    legue: PropTypes.object,
  }

  render() {
  	const {legue} = this.props
    return (
      <div className = "container mb-2">
          <div className = "row justify-content-between">
            <HeaderSelect seasson = {legue}/>
          	<div className = "col-md-3 logo" >{legue.league}</div>
          </div>  
      </div>
    );
  }
}

export default connect((state) => ({
	legue: state.legue
}))(McHeader);
