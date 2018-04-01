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
	      				<div className = "col-12 panel-team-static-header" 
	      				onClick = {toggleOpen}
	      				style = {this.toggleColor()}
	      				>TEAM STATICS</div>
	      				{isOpen ? <div className = "col-12 panel-team-static-content">
	      					<div className = "row">
	      						<div className = "col-12">
	      							<div className = "row static-row">
	      								<div className = "col-3 static-team-Home"> 36%</div>
	      								<div className = "col-6 static-value">Ball possession, %</div>
	      								<div className = "col-3 static-team-away">
	      									<span>53%</span>
	      								</div>
	      							</div>
	      							<div className = "row static-row">
	      								<div className = "col-3 static-team-Home">21</div>
	      								<div className = "col-6 static-value">Shot</div>
	      								<div className = "col-3 static-team-away">13</div>
	      							</div>
	      							<div className = "row static-row">
	      								<div className = "col-3 static-team-Home">16</div>
	      								<div className = "col-6 static-value">Foul</div>
	      								<div className = "col-3 static-team-away">3</div>
	      							</div>
	      							<div className = "row static-row">
	      								<div className = "col-3 static-team-Home">10</div>
	      								<div className = "col-6 static-value">Corners</div>
	      								<div className = "col-3 static-team-away">5</div>
	      							</div>
	      							<div className = "row static-row">
	      								<div className = "col-3 static-team-Home">11</div>
	      								<div className = "col-6 static-value">Shot on target</div>
	      								<div className = "col-3 static-team-away">3</div>
	      							</div>
	      						</div>
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
