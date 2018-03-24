import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        	<div className="alert alert-primary">123</div>
      </div>
    );
  }
}

export default connect(state => ({
	matchs: state.match
}))(App);
