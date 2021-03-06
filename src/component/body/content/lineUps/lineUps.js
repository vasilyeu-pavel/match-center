import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineUpsTeamHome from './lineUpsTeamHome'
import LineUpsTeamAway from './lineUpsTeamAway'

class LineUps extends Component {
    static propTypes = {
    	match: PropTypes.object,
    	toggleOpen: PropTypes.func,
    };

    render() {
    	const {match, toggleOpen, isOpen} = this.props
	    return (
	      		<div className = "col-12 panel-lineUps">
	      			<div className= "row">
	      				<div className = "col-12 panel-lineUps-header" 
	      				onClick = {toggleOpen} style = {this.toggleColor()}>LINE-UPS</div>
	      				{isOpen ? <div className = "col-12 panel-lineUps-players-content">
	      					<div className = "row">
	      						<LineUpsTeamHome match = {match}/>
	      						<LineUpsTeamAway match = {match}/>
	      					</div>
	      				</div> : null}
	      			</div>
	      		</div>
	    );
    }

    toggleColor = ev => {
    	const {isOpen} = this.props
    	if (isOpen) {
    		return {"color": "black"}
    	}
    }
}

export default LineUps;
