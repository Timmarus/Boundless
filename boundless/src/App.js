import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/loginPages/login';
import NavBar from './components/navBar/navBar';
import UpdateBio from './components/UpdateBio/Bio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={login} />
            <Route path="/Biography" component={UpdateBio} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
