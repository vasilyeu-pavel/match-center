import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Aperture } from 'react-feather';
import GoalAway  from './goalAway'

class EventsTeamAway extends Component {
	static propTypes = {
        match: PropTypes.object,
    };

    componentWillReceiveProps() {
    	if (!this.props.match) return null
    }

	render() {
		const { goalAway } = this.props.match
		const arrGoalAway = Object.values(goalAway)

		const goal = arrGoalAway.map((goal, index) => (
			<GoalAway goal = {goal} key = {index}/>
		))		
		return (
			<div className = "col-4 eventsTeamAway">
				{goal}123
			</div>
			)
	}
}
export default EventsTeamAway