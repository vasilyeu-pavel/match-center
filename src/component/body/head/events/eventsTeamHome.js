import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Aperture } from 'react-feather';
import GoalHome  from './goalHome'

class EventsTeamHome extends Component {
	static propTypes = {
        match: PropTypes.object,
    };

	render() {
		const { goalHome } = this.props.match
		const arrGoalHome = Object.values(goalHome)

		const goal = arrGoalHome.map((goal, index) => (
			<GoalHome goal = {goal} key = {index}/>
		))

		return (
			<div className = "col-4 eventsTeamHome">
				<div className = "row justify-content-end">
					{goal}
				</div>
			</div>
			)
	}
}
export default EventsTeamHome