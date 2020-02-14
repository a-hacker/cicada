// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import type { HashHistory } from 'history';
import tickets from './tickets';
import jiraConfig from './jiraConfig';
import projects from './projects';
import sidebar from './sidebar';

export default function createRootReducer(history: HashHistory) {
  return combineReducers<{}, *>({
    router: connectRouter(history),
    jiraConfig,
    tickets,
    projects,
    sidebar
  });
}
