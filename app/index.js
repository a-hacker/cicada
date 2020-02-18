import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import settings from 'electron-settings';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const projectSettings = settings.get('projects');
const projects = new Map();
Object.entries(projectSettings).forEach(([projectName, project]) => {
  projects.set(projectName, { tickets: [], ...project });
});
const store = configureStore({ projects: { projects, currentProject: '' } });

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);
