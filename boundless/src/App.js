import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./components/loginPages/login";
import NavBar from "./components/navBar/navBar";
import Register from "./components/RegisterPages/Register";
import Home from "./components/homescreenPages/HomeScreen";
import Chatroom from "./components/chatroomPages/Chatroom";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/chatroom" component={Chatroom} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
