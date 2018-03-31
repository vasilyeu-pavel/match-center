import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Clock } from 'react-feather';

class StatusMatch extends Component {
	static propTypes = {
        match: PropTypes.object,
    };

	render() {
		const { match } = this.props
		return (
			<div className = "col-2 headesEeventsMatch">
				<div className = "row align-items-start justify-content-center">
					<span><Clock /></span> 
					<span className = "mx-2 status-match align-self-center">Finished</span>
				</div>
				<div className = "w-100"></div>
				<div className = "row align-items-start justify-content-center date-match">
					{match.general.date + " " + match.general.time}
				</div>
			</div>
			)
	}
}
export default StatusMatch