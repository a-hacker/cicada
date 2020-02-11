// @flow
import { SET_SETTINGS, INITIALIZE_SETTINGS } from '../actions/jiraConfig';
import type { Action, JiraSettings } from './types';

export default function jiraConfig(state: JiraSettings = {}, action: Action) {
  switch (action.type) {
    case INITIALIZE_SETTINGS:
      return action.context;
    case SET_SETTINGS: {
      const newState = { ...state };
      newState[action.context.name] = action.context.value;
      return newState;
    }
    default:
      return state;
  }
}
