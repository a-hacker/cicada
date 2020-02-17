// @flow
import { ADD_PROJECT, SET_PROJECT, ADD_TICKET } from '../actions/projects';
import type { Action, ProjectSettings, Ticket, Project } from './types';

export default function projectsReducer(
  state: ProjectSettings = {
    projects: new Map(),
    currentProject: '' // { tickets: new Map(), projectName: null, issueFilter: null }
  },
  action: Action
) {
  switch (action.type) {
    case ADD_PROJECT: {
      const newProject = {
        tickets: [],
        ...action.context
      };
      const projects: Map<string, Project> = new Map(state.projects);
      projects.set(action.context.projectName, newProject);
      return {
        ...state,
        projects
      };
    }
    case SET_PROJECT: {
      return {
        ...state,
        currentProject: action.context.projectName
      };
    }
    case ADD_TICKET: {
      const currentProject = state.projects.get(state.currentProject);
      const tickets: Map<string, Ticket> = new Map(currentProject.tickets);
      tickets.set(action.context.key, action.context);
      const newProject = {
        ...currentProject,
        tickets
      };
      const newProjects = new Map(state.projects);
      newProjects.set(newProject.projectName, newProject);
      return {
        ...state,
        projects: newProjects
      };
    }
    default:
      return state;
  }
}
