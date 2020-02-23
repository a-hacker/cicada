// @flow
import { ADD_TICKET, MODIFY_PROJECT } from '../actions/projects';
import type { Action, Ticket, Project } from './types';

export default function projectReducer(
  state: Project = {
    tickets: new Map(),
    projectName: '',
    issueFilter: ''
  },
  action: Action
) {
  switch (action.type) {
    case ADD_TICKET: {
      const tickets: Map<string, Ticket> = new Map(state.tickets);
      tickets.set(action.context.key, action.context);
      return {
        ...state,
        tickets
      };
    }
    case MODIFY_PROJECT:
      return {
        ...state,
        ...action.context.project
      };
    default:
      return state;
  }
}
