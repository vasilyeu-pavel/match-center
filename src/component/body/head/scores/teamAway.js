import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scores extends Component {
	static propTypes = {
	    match: PropTypes.object
	};

	render() {
	const {match} = this.props
    return (
		<div className = "col-4">
		    <div className = "row justify-content-between">
				<div className = "col align-self-end match-header-teamAway">	
					<h3>{match.score.away}</h3>
				</div>	      				    
			{/*	<div className = "col logo" style={{"textAlign": "right"}}>
					<img src={}/>
				</div>*/}
			</div>
		</div>
    );
  }
}

export default Scores;
