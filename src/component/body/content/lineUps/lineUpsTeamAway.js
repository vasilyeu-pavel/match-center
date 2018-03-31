import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './player'

class LineUpsTeamAway extends Component {
    static propTypes = {
    	match: PropTypes.object
    };

    render() {
    	const {match} = this.props
    	const arrPlayers = Object.values(match.teamAway)
    	const player = arrPlayers.map((player, index) => (
    		<Player player = {player} key = {index} number = {index}/>
    	))

	    return (
			<div className = "col-6 panel-lineUps-teamAway">
				<ul>
					{player}
				</ul>	      							
			</div>
	    );
    }
}

export default LineUpsTeamAway;
