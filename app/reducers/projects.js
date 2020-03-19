// @flow
import settings from 'electron-settings';
import {
  ADD_PROJECT,
  SET_PROJECT,
  ADD_TICKET,
  MODIFY_PROJECT,
  REMOVE_PROJECT
} from '../actions/projects';
import type { Action, ProjectSettings, Project } from './types';
import projectReducer from './project';
import createNewProject from '../utils/projectUtils';

export default function projectsReducer(
  state: ProjectSettings = {
    projects: new Map(),
    currentProject: ''
  },
  action: Action
) {
  switch (action.type) {
    case ADD_PROJECT: {
      const newProject = {
        ...createNewProject(),
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
      const currentProject = state.projects.get(action.context.projectName);
      const newProject = projectReducer(currentProject, {
        type: ADD_TICKET,
        context: action.context.ticket
      });
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
      settings.set(`projects.${newProject.projectName}`, newProject);
      const newProjects = new Map(state.projects);
      newProjects.set(newProject.projectName, newProject);
      if (newProject.projectName !== action.context.projectName) {
        newProjects.delete(action.context.projectName);
        settings.delete(`projects.${action.context.projectName}`);
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
    case REMOVE_PROJECT: {
      const newProjects = new Map(state.projects);
      newProjects.delete(action.context.projectName);
      const currentProject =
        action.context.projectName === state.currentProject
          ? ''
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
