// @flow
import { TOGGLE_SIDEBAR } from '../actions/sidebar';
import type { Action } from './types';

export default function sidebar(state: boolean = true, action: Action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}
