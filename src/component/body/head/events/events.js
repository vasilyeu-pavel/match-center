import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Aperture, Clock } from 'react-feather';
import EventsTeamHome from './eventsTeamHome'
import EventsTeamAway from './eventsTeamAway'
import StatusMatch from './statusMatch'

class Events extends Component {
	static propTypes = {
        id: PropTypes.string,
    };

	render() {
		return (
				<div className = "row justify-content-center">
					<EventsTeamHome />
					<StatusMatch />
					<EventsTeamAway />
				</div>
			)
	}
}
export default Events