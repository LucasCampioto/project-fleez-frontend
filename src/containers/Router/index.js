import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/index";
import Signup  from "../Signup";
import Login  from "../LoginPage"
import Goals from "../Goals/index";

export const routes = {
  homePage: "/",
  goals: "/goals"
}; 

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.homePage} component={HomePage} />
          <Route exact path={routes.goals} component={Goals} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;