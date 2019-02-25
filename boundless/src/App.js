import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./components/loginPages/login";
import NavBar from "./components/navBar/navBar";
import UpdateBio from "./components/UpdateBio/Bio";
import Register from "./components/RegisterPages/Register";
import Home from "./components/homescreenPages/HomeScreen";
import Settings from "./components/SettingsPage/Settings";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/Biography" component={UpdateBio} />
            <Route exact path="/" component={login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
