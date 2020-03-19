import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type ticketsStateType = {
  +tickets: Array<Ticket>
};

export type Action = {
  +type: string,
  +context: ?{}
};

export type Ticket = {
  +summary: string,
  +key: string,
  +description: string,
  +status: {
    color: string,
    name: string
  },
  +assignee: string,
  +issueType: string,
  +project: {
    fullName: string,
    key: string
  }
};

export type JiraSettings = {
  +host: string,
  +username: string,
  +token: string
};

export type Project = {
  +projectName: string,
  +tickets: Map<key, Ticket>,
  +issueFilter: ?string,
  +pinnedIssues: Array<string>
};

export type ProjectSettings = {
  +projects: Map<string, Project>,
  +currentProject: string
};

export type GetState = () => ticketsStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
