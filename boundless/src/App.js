import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/loginPages/login';
import NavBar from './components/navBar/navBar';
import home from "./components/homescreenPages/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={login} />
            <Route path="/homescreen" component={home} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
