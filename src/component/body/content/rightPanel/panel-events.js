import React, { Component } from 'react';
import './style.css'
import PropTypes from 'prop-types';


class PanelEvents extends Component {
    static propTypes = {

    };

    render() {

	    return (
	    	<div className = "col-md-4">
	    		<div className = "col-12 panel-Events">
	      			<div className= "row">
	      				<div className = "col-12 panel-Events-header">EVENTS</div>
	      				<div className = "col-12 panel-Events-content">
		      				<div className = "col-12 panel-Events-menu">

		      					<div className = "row align-items-center Events-menu">
			      					<div className = "col-4 events-filter-menu">
			      						<button type="button" className="btn btn-outline-secondary btn-sm">
			      						Shots
			      						</button>
			      					</div>
			      					<div className = "col-4 events-filter-menu">
			      						<button type="button" className="btn btn-outline-secondary btn-sm">
			      						Team
			      						</button>
			      					</div>
			      					<div className = "col-4 events-filter-menu">
			      						<button type="button" className="btn btn-outline-secondary btn-sm">
			      						Player
			      						</button>
			      					</div>
		      					</div>

		      				</div>
		      				<div className = "col-12 panel-Events-list">
		      					<div className = "row align-items-center event-row">
		      						<div className = "col-2">
		      							<span className = "event-time">{1+"'"}</span>
		      						</div>
		      						<div className = "col-10 event-element">
		      						<div>foul</div>
		      						<span>Danny Williamson</span>
		      						</div>
		      					</div>
		      					
		      					<div className = "row align-items-center event-row">
		      						<div className = "col-2">
		      							<span className = "event-time">{2+"'"}</span>
		      						</div>
		      						<div className = "col-10 event-element">
		      						<div>foul</div>		      						
		      						<span>Lukek Miklosko</span></div>
		      					</div>
		      				</div>

	      				</div>
	      			</div>
	      		</div>
	    	</div>
	    )
    }
}

export default PanelEvents
