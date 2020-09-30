import React from "react";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import CartModule from "./components/cartModule";
import Login from "./components/Login";

const appRoute = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/cart" component={CartModule} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default appRoute;
