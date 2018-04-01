import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import GoalHome  from './goalHome'

class EventsTeamHome extends Component {
	static propTypes = {
        match: PropTypes.object,
    };

    state = {
    	element: <div className = "col-12 mb-1 info-goal"></div>
    }

	render() {
		const { goalHome } = this.props.match
		if (goalHome) {
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
		}else { 

		return (
			<div className = "col-4 eventsTeamHome">
				<div className = "row justify-content-end">
					{this.state.element}
				</div>
			</div>
			)
		}	
	}
}
export default EventsTeamHome