import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class SliderMatch extends Component {
    static propTypes = {
    match: PropTypes.object,
    index: PropTypes.number,
	};

  render() {
  	const {match, index} = this.props

  	return(
      <NavLink to = {`/match/${index}`} style = {{
          "textDecoration": "none",
          "color": 'white'
      }}>
      		<div data-index="1" className ="slick-slide slick-active slick-element" 
      		tabIndex = "-1" 
      		style = {{
      			"outline": "none",
      		  	"width": "245px"
      		}}>
      		  <div className = "matchStats">

      		  		<div className = "matchTeam1">
      		  			<strong>{match.score.home}</strong>
    	  		  		<span className = "matchScore">{match.score.homeScore}</span>
    	  		  	</div>

      		  		<div className = "matchTeam2">
      		  		  	<strong>{match.score.away}</strong>
      		  			<span className = "matchScore">{match.score.awayScore}</span>
      		  		</div>
      		  </div>
      		    <div className = "matchDate">{match.general.date + " " + match.general.time}</div>
      		  </div>
      </NavLink>      
  		)
  }
}

