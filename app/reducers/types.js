import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type ticketsStateType = {
  +tickets: Array<Ticket>
};

export type Action = {
  +type: string,
  +context: ?{}
};

export type Ticket = {
  +summary: string,
  +key: string
};

export type GetState = () => counterStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
