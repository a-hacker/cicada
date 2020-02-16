// @flow
import { Project } from '../reducers/types';

export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';

export function addProject(project: Project) {
  return {
    type: ADD_PROJECT,
    context: project
  };
}

export function setProject(projectName: string) {
  return {
    type: SET_PROJECT,
    context: {
      projectName
    }
  };
}
