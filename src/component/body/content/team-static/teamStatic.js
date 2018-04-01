import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TeamStatic extends Component {
    static propTypes = {
    	match: PropTypes.object,
    	toggleOpen: PropTypes.func,
    };

    render() {
    	const {toggleOpen, isOpen} = this.props

	    return (
	      		<div className = "col-12 panel-lineUps">
	      			<div className= "row">
	      				<div className = "col-12 panel-lineUps-header" 
	      				onClick = {toggleOpen}
	      				style = {this.toggleColor()}
	      				>TEAM STATICS</div>
	      				{isOpen ? <div className = "col-12 panel-lineUps-players-content">
	      					<div className = "row">
	      						123
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

export default TeamStatic;
