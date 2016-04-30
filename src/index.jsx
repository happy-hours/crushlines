require("./assets/main.scss");
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { hashHistory } from "react-router";
import AppContainer from "./components/app-container.jsx";
import Feed from "./components/feed.jsx";
import InjectTapEventPlugin from "react-tap-event-plugin";

ReactDOM.render((
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer } />
    <Route path="/feed" component={ Feed } />
  </Router>
), document.getElementById("content"));
