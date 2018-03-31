import React, { Component } from 'react';
import ScoresContainer from './scores/scoresContainer'
import PropTypes from 'prop-types';
import Events from './events/events'

class Head extends Component {
	static propTypes = {
        id: PropTypes.string,
    };

	render() {
   	const { id } = this.props		
	    return (
	    	<div className = "col">
	      		<ScoresContainer id = {id}/>
	      		<Events id = {id}/>
	      	</div>
	    	)
	}
}
export default Head