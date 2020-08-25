import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import List from "../src/Pages/List/List";
import Detail from "../src/Pages/Detail/Detail";
import Login from "../src/Pages/Sign/Login";
import SignUp from "../src/Pages/Sign/SignUp";
import About from "../src/Pages/About/About";
import Store from "../src/Pages/Sign/Store";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/List" component={List} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Sign" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Store" component={Store} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
