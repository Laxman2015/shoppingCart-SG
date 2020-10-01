import React from "react";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import CartModule from "./components/cartModule";
import Login from "./components/Login";

const appRoute = () => (
  <Switch>
    <Route exact path="/shoppingcart-sg/" component={App} />
    <Route exact path="/shoppingcart-sg/cart" component={CartModule} />
    <Route exact path="/shoppingcart-sg/login" component={Login} />
  </Switch>
);

export default appRoute;
