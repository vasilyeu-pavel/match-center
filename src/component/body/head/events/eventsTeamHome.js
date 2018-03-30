import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import { Aperture } from 'react-feather';

class EventsTeamHome extends Component {
	static propTypes = {
        id: PropTypes.string,
    };

	render() {
		return (
			<div className = "col-md-4 eventsTeamHome">
				<div className = "row justify-content-end">

					<div className = "col-12 mb-1 info-goal">
						<span className = "infoGoalsTime">
							{"97'"}
						</span>
						<span className = "mx-2">
							Jerremy
						</span>
						<span>
							<Aperture size={12}/>
						</span>
					</div>

				</div>
			</div>
			)
	}
}
export default EventsTeamHome