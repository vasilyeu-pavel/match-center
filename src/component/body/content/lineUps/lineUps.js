import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineUpsTeamHome from './lineUpsTeamHome'
import LineUpsTeamAway from './lineUpsTeamAway'

class LineUps extends Component {
    static propTypes = {
    	match: PropTypes.object
    };

    state = {
    	isOpen: true
    }

    render() {
    	const {isOpen} = this.state
    	const {match} = this.props
	    return (
	      		<div className = "col-12 panel-lineUps">
	      			<div className= "row">
	      				<div className = "col-12 panel-lineUps-header" onClick = {this.toggleOpen}>LINE-UPS</div>
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

    toggleOpen = (ev) => {
    	this.setState({
    		isOpen: !this.state.isOpen
    	})
    }
}

export default LineUps;
