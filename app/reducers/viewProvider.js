// @flow
import { UPDATE_VIEW, RESET_VIEW } from '../actions/views';
import type { Action } from './types';

export default function viewProvider(state: Object = {}, action: Action) {
  switch (action.type) {
    case UPDATE_VIEW:
      return {
        ...state,
        ...action.context
      };
    case RESET_VIEW:
      return {};
    default:
      return state;
  }
}
