
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/index.scss";
import Nav from "./Components/Nav.jsx";
import Home from "./Screens/Home.jsx";
import Teams from "./Screens/Teams.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blogs from "./Screens/Blogs.jsx";

class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" exact component={Teams} />
          <Route path="/blogs" exact component={Blogs} />

        </Switch>
        </Nav>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
