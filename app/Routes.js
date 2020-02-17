import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ProjectPage from './containers/ProjectPage';
import SettingsPage from './containers/SettingsPage';
import ProjectCreationForm from './containers/ProjectCreationForm';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.NEW_PROJECT} component={ProjectCreationForm} />
      <Route path={routes.TICKETS} component={ProjectPage} />
      <Route path={routes.SETTINGS} component={SettingsPage} />
    </Switch>
  </App>
);
