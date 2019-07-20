import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Loading from './shared/Loading';

const Selection = lazy(() => import('./selection/Selection'));
const Balance = lazy(() => import('./action/Balance'));
const BalanceWithdraw = lazy(() => import('./action/BalanceWithdraw'));
const Withdraw = lazy(() => import('./action/Withdraw'));
const Login = lazy(() => import('./auth/Login'));
const EndScreen = lazy(() => import('./action/EndScreen'));

const Router = () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <Selection {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/login"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <Login {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/balance"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <Balance {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/balance-withdraw"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <BalanceWithdraw {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/withdraw"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <Withdraw {...props} />
            </Suspense>
          )}
        />
        <Route
          path="/end-screen"
          exact
          render={(props) => (
            <Suspense fallback={<Loading />}>
              <EndScreen {...props} />
            </Suspense>
          )}
        />
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
