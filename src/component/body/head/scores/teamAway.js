import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scores extends Component {
	static propTypes = {
	    match: PropTypes.array
	};

	render() {
	const {match} = this.props
    return (
		<div className = "col-4">
		    <div className = "row justify-content-between">
				<div className = "col align-self-end match-header-teamAway">	
					<h3>{match[0].team2.name}</h3>
				</div>	      				    
				<div className = "col logo" style={{"textAlign": "right"}}>
					<img src={match[0].team2.logo}/>
				</div>
			</div>
		</div>
    );
  }
}

export default Scores;
