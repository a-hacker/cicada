// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { HashHistory } from 'history';
import { reducer as formReducer } from 'redux-form';
import tickets from './tickets';
import jiraConfig from './jiraConfig';
import projects from './projects';
import sidebar from './sidebar';
import views from './viewProvider';

export default function createRootReducer(history: HashHistory) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    jiraConfig,
    tickets,
    projects,
    sidebar,
    views,
    form: formReducer
  });
}
