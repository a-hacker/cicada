// @flow
import {
  ADD_PROJECT,
  SET_PROJECT,
  ADD_TICKET,
  MODIFY_PROJECT
} from '../actions/projects';
import type { Action, ProjectSettings, Project } from './types';
import projectReducer from './project';

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
      const newProject = projectReducer(currentProject, action);
      const newProjects = new Map(state.projects);
      newProjects.set(newProject.projectName, newProject);
      return {
        ...state,
        projects: newProjects
      };
    }
    case MODIFY_PROJECT: {
      const oldProject = state.projects.get(action.context.projectName);
      const newProject = projectReducer(oldProject, action);
      const newProjects = new Map(state.projects);
      newProjects.set(newProject.projectName, newProject);
      if (newProject.projectName !== action.context.projectName) {
        newProjects.delete(action.context.projectName);
      }
      const currentProject =
        oldProject.projectName === state.currentProject
          ? newProject.projectName
          : state.currentProject;
      return {
        ...state,
        currentProject,
        projects: newProjects
      };
    }
    default:
      return state;
  }
}
