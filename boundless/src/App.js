<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./components/loginPages/login";
import NavBar from "./components/navBar/navBar";
import Register from "./components/RegisterPages/Register";
=======
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import login from './components/loginPages/login';
import NavBar from './components/navBar/navBar';
import Home from "./components/homescreenPages/HomeScreen";
>>>>>>> 7f18545fb1627c7ff69f6bed533c6c904db7bf7a

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={login} />
<<<<<<< HEAD
            <Route path="/register" component={Register} />
=======
            <Route path="/home" component={Home} />
>>>>>>> 7f18545fb1627c7ff69f6bed533c6c904db7bf7a
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
