import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class SliderMatch extends Component {
    static propTypes = {
    //from connect
	    match: PropTypes.shape({
	    	id: PropTypes.string.isRequired,
	    	date: PropTypes.string,
	    	team2: PropTypes.object,
	    	team1: PropTypes.object,
	    	score1: PropTypes.number,
	    	score2: PropTypes.number
	    }),
	};

  render() {
  	const {match} = this.props

  	return(
      <NavLink to = {`/match/${match.id}`} style = {{
          "textDecoration": "none",
          "color": 'white'
      }}>
      		<div data-index="1" className ="slick-slide slick-active" 
      		tabIndex = "-1" 
      		style = {{
      			"outline": "none",
      		  	"width": "245px"
      		}}>
      		  <div className = "matchStats">

      		  		<div className = "matchTeam1">
      		  			<strong>{match.team1.name}</strong>
    	  		  		<span className = "matchScore">{match.score1}</span>
    	  		  	</div>

      		  		<div className = "matchTeam2">
      		  		  	<strong>{match.team2.name}</strong>
      		  			<span className = "matchScore">{match.score2}</span>
      		  		</div>
      		  </div>
      		    <div className = "matchDate">{match.date}</div>
      		  </div>
      </NavLink>      
  		)
  }
}

