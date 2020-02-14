// @flow
import { ADD_PROJECT, SET_PROJECT } from '../actions/projects';
import type { Action, ProjectSettings } from './types';

export default function projects(
  state: ProjectSettings = { projects: [], curentProject: '' },
  action: Action
) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.context]
      };
    case SET_PROJECT: {
      return {
        ...state,
        curentProject: state.projects.find(
          project => project.projectName === action.context.projectName
        )
      };
    }
    default:
      return state;
  }
}
