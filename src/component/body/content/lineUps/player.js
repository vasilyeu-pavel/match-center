import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
    static propTypes = {
    	player: PropTypes.string
    };

    render() {
    	const {player, number} = this.props
	    return (
	    	<li>
				<span className = "player-number">{number + 1}</span>
				<span className = "player-name">{player}</span>
			</li>
	    );
    }
}

export default Player;
