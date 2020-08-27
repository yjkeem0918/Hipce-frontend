import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import List from "../src/Pages/List/List";
import Detail from "../src/Pages/Detail/Detail";
import Shoppingbag from "../src/Pages/Shoppingbag/Shoppingbag";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/shoppingbag" component={Shoppingbag} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
