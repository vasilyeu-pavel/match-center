import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar'
import Body from './body'
import Header from './header'

class App extends Component {
  render() {
    return (
      <div className="conteiner">
      		<NavBar />
      		<Header />
        	<Body />
      </div>
    );
  }
}

export default connect(state => ({
	matchs: state.match
}))(App);
