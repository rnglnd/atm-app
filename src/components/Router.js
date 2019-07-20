import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import Selection from "./selection/Selection";
import Balance from './action/Balance';
import BalanceWithdraw from './action/BalanceWithdraw';
import Withdraw from './action/Withdraw';
import Login from '../components/auth/Login';
import EndScreen from '../components/action/EndScreen';

const Router = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Selection} />
        <Route path="/login" exact component={Login} />
        <Route path="/balance" exact component={Balance} />
        <Route path="/balance-withdraw" exact component={BalanceWithdraw} />
        <Route path="/withdraw" exact component={Withdraw} />
        <Route path="/end-screen" exact component={EndScreen} />
        <Route
          path="*"
          render={({ location: { pathname } }) => (
            <h1>Error: Route {pathname} not defined </h1>
          )}
        />
      </Switch>
    </HashRouter>
  </Provider>
);

export default Router;
