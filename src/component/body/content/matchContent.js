import React, { Component } from 'react';
import './style.css'
import PropTypes from 'prop-types';
import LineUps from './lineUps/lineUps';
import TeamStatic from './team-static/teamStatic';
import PanelEvents from './rightPanel/panel-events'
import { connect } from 'react-redux';
import Accordion from '../../../decorators/accordion'

class MatchContent extends Component {
    static propTypes = {
    	id: PropTypes.string,
    	matchList: PropTypes.array,
    	toggleOpenItem: PropTypes.func,
    };

    render() {
    	const {id, matchList, openItemId, toggleOpenItem } = this.props
	    return (
	      <div className="row match-accordion">
	      		<div className = "col-md-4">
	      			<LineUps match = {matchList[id]} 
	      			toggleOpen = {toggleOpenItem(1)} 
	      			isOpen = {openItemId === 1}
	      			/>
	      			<TeamStatic match = {matchList[id]}
					toggleOpen = {toggleOpenItem(2)} 
	      			isOpen = {openItemId === 2}
	      			/>
	      		</div>	

	      	<div className = "col-md-4"></div>
	      	<PanelEvents />
	      	
	      </div>
	    );
    }
}

export default connect(state => ({
	matchList: state.matches
}))(Accordion(MatchContent));
