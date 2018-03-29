import React, { Component } from 'react';
import './style.css'
import Head from './head/head'
import PropTypes from 'prop-types';

class Body extends Component {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
    	const { id } = this.props
	    return (
	      <div className="container">
	      	<div className = "row justify-content-center match-header">
	      		<Head id ={id}/>
	      	</div>
	      </div>
	    );
    }
}

export default Body;
