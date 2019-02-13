import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/loginPages/login';
import NavBar from './components/navBar/navBar';
import Home from "./components/homescreenPages/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={login} />
            <Route path="/home" component={Home} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
