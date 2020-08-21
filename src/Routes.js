import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from '../src/Pages/Main/Main'
import List from '../src/Pages/List/List'
import Detail from '../src/Pages/Detail/Detail'
import Sign from '../src/Pages/Sign/Sign'
import Shoppingbag from '../src/Pages/Shoppingbag/Shoppingbag'


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/List" component={List} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/Sign" component={Sign} />
          <Route exact path="/Shoppingbag" component={Shoppingbag} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
