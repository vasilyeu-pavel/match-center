import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import EventsTeamHome from './eventsTeamHome'
import EventsTeamAway from './eventsTeamAway'
import StatusMatch from './statusMatch'
import { connect } from 'react-redux';

class Events extends Component {
	static propTypes = {
        id: PropTypes.string,
        matchList: PropTypes.array
    };

	render() {
		const { matchList, id } = this.props
		return (
				<div className = "row justify-content-center">
					<EventsTeamHome match = {matchList[id]}/>
					<StatusMatch match = {matchList[id]}/>
					<EventsTeamAway match = {matchList[id]}/>
				</div>
			)
	}
}
export default connect(state => ({
	matchList: state.matches
}))(Events)