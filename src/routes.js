import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Affiliates from './pages/Affiliates';
import Tiers from './pages/Tiers';
import NoMatch from './pages/NoMatch';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <p>dashboard</p>
  },
  {
    path: '/affiliates',
    component: () => <Affiliates />
  },
  {
    path: '/tiers',
    component: () => <Tiers />
  },
  {
    component: () => <NoMatch />
  }
];

const Routes = () => (
  <main>
    <Switch>
      {routes.map(({ path, exact, component }, index) => (
        <Route key={index} path={path} exact={exact} component={component} />
      ))}
    </Switch>
  </main>
);

export default Routes;
