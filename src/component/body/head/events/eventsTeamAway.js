import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import GoalAway  from './goalAway'

class EventsTeamAway extends Component {
	static propTypes = {
        match: PropTypes.object,
    };
    
    state = {
    	element: <div className = "col-12 mb-1 info-goal"></div>
    }

	render() {
		const { goalAway } = this.props.match
		if (goalAway) {			
		const arrGoalAway = Object.values(goalAway)

		const goal = arrGoalAway.map((goal, index) => (
			<GoalAway goal = {goal} key = {index}/>
		))		
		return (
			<div className = "col-4 eventsTeamAway">
				<div className = "row justify-content-end">
					{goal}
				</div>	
			</div>
			)
		}else {
		return (
			<div className = "col-4 eventsTeamAway">
				<div className = "row justify-content-end">
					{this.state.element}
				</div>	
			</div>
			)
		}	
	}
}
export default EventsTeamAway