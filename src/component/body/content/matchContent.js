import React, { Component } from 'react';
import './style.css'
import PropTypes from 'prop-types';
import LineUps from './lineUps/lineUps';
import { connect } from 'react-redux';

class MatchContent extends Component {
    static propTypes = {
    	id: PropTypes.string,
    	matchList: PropTypes.array,
    };

    render() {
    	const {id, matchList} = this.props
	    return (
	      <div className="row match-accordion">
	      		<div className = "col-md-4">
	      			<LineUps match = {matchList[id]}/>
	      		</div>	

	      	<div className = "col-md-4"></div>
	      	<div className = "col-md-4"></div>

	      </div>
	    );
    }
}

export default connect(state => ({
	matchList: state.matches
}))(MatchContent);
