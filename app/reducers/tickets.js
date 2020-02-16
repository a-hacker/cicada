// @flow
import { SET_TICKET } from '../actions/tickets';
import type { Action, Ticket } from './types';

export default function tickets(
  state: Map<string, Ticket> = new Map(),
  action: Action
) {
  switch (action.type) {
    case SET_TICKET: {
      const newState: Map<string, Ticket> = new Map(state);
      newState.set(action.context.key, action.context);
      return newState;
    }
    default:
      return state;
  }
}
