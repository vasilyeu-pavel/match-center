import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamHome extends Component {
	static propTypes = {
	    match: PropTypes.array
    };

  render() {
  	const {match} = this.props
    return (
		<div className = "col-4">
			<div className = "row justify-content-between no-gutters">
				<div className = "col logo">
					<img src={match[0].team1.logo}/>
				</div>
				<div className = "col align-self-end match-header-teamHome">	
					<h3>{match[0].team1.name}</h3>
				</div>
			</div>
		</div>
    );
  }
}

export default TeamHome;
