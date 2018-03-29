import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import TeamHome from './teamHome'
import TeamAway from './teamAway'
import Scores from './scores'
import { connect } from 'react-redux';


class ScoresContainer extends Component {
	static propTypes = {
        id: PropTypes.string,
        //from connect
        matchList: PropTypes.array
    };

    state = {
    	matchId: '',
    }

    componentWillMount() {
    	const {id} = this.props
    	this.setState({
    		matchId: id
    	})
    }

    componentWillReceiveProps(nextProps) {
    	const {id} = nextProps
    	this.setState({
    		matchId: id
    	})
    }

	render() {
		const id = this.state.matchId
		const {matchList} = this.props

		const match = matchList.filter(match => match.id === id)
	    return (
	    	<div className = "row justify-content-center">
	    		<TeamHome match = {match}/>
                <Scores match = {match}/>
	    		<TeamAway match = {match}/>
	      	</div>
	    );
	}
}

export default connect(state => ({
	matchList: state.match
}))(ScoresContainer);
