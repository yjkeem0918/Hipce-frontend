import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import List from "../src/Pages/List/List";
import Detail from "../src/Pages/Detail/Detail";
import Login from "../src/Pages/Sign/Login";
import SignUp from "../src/Pages/Sign/SignUp";
import About from "../src/Pages/About/About";
import Collection from "../src/Pages/Collection/Collection";
import Search from "../src/Pages/Search/Search";
import Shoppingbag from "../src/Pages/Shoppingbag/Shoppingbag";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/list/:hello" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shoppingbag" component={Shoppingbag} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
