import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamAway extends Component {
	static propTypes = {
	    match: PropTypes.object,
    };	

    render() {
  	const {match} = this.props 	
    return (
		<div className = "col-2">
			<div className = "row justify-content-around">
				<div className = "scores-card">
					<h1>{match.score.homeScore}</h1>
				</div>
				<div className = "scores-card">
					<h1>{match.score.awayScore}</h1>
				</div>
			</div>
		</div>
    );
  }
}

export default TeamAway;
