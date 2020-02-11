// @flow
import { SET_TICKET } from '../actions/tickets';
import type { Action, Ticket } from './types';

export default function tickets(state: Array<Ticket> = [], action: Action) {
  switch (action.type) {
    case SET_TICKET:
      return [...state, action.context];
    default:
      return state;
  }
}
