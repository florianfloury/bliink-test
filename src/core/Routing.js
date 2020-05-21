import React from 'react'
import {Router, Route, Switch, Redirect} from 'react-router';

import {pathRoute} from './constants';
import {history} from './history';
import routes from './routes';

const createRoute = () => Object
  .entries(routes)
  .map(([key, route]) => (
    <Route exact key={key} path={route.path} component={route.component}/>
  ));


export const Routing = () => {
  const routes = createRoute();

  return (
    <Router history={history}>
      <Switch>
        {routes}
        <Redirect to={pathRoute.HOME}/>
      </Switch>
    </Router>
  );
};

export default Routing;