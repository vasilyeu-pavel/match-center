import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aperture } from 'react-feather';

class GoalAway extends Component {
	static propTypes = {
		goal: PropTypes.object,
    };

	render() {
		const {goal} = this.props
		return (
				<div className = "col-12 mb-1 info-goal">
					<span>
						<Aperture size={12}/>
					</span>
					<span className = "mx-2">
						{goal.name}
					</span>
					<span className = "infoGoalsTime">
						{goal.time + "'"}
					</span>
				</div>					
			)
	}
}
export default GoalAway