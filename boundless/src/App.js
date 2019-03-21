import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./components/loginPages/login";
import NavBar from "./components/navBar/navBar";
import UpdateBio from "./components/UpdateBio/Bio";
import Register from "./components/RegisterPages/Register";
import Home from "./components/homescreenPages/HomeScreen";
import Settings from "./components/SettingsPage/Settings";
import Chatroom from "./components/chatroomPages/Chatroom";

const bgimage = require("./white-waves.png");
class App extends Component {
  render() {
    document.getElementById('root').style.backgroundImage = `url(${bgimage})`
    return (
      <BrowserRouter>
        <div
          className="App"
          style={{ maxHeight: "inherit", backgroundImage: `url(${bgimage})` }}
        >
          <NavBar />
          <Switch>
            <Route path="/biography" component={UpdateBio} />
            <Route exact path="/" component={login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/chatroom" component={Chatroom} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
