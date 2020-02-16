import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TicketsPage from './containers/TicketsPage';
import SettingsPage from './containers/SettingsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.TICKETS} component={TicketsPage} />
      <Route path={routes.SETTINGS} component={SettingsPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
