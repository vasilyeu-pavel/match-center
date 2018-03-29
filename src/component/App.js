import React, { Component } from 'react';
import NavBar from './navBar'
import Body from './body'
import Header from './header'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="conteiner">
      		<NavBar />
          <div className= 'row justify-content-center'>
            <Header />
            <Switch>
                <Route path ="/match/:id" render = {this.getMatch}/>
            </Switch>
          </div>
      </div>
    );
  }


  getMatch = ({ match }) => {
    const id = match.params.id
      return (
        <Body id = {id}/>
      );
    }
}

export default App;
