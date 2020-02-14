// @flow
export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';

export function addProject(projectName: string) {
  return {
    type: ADD_PROJECT,
    context: {
      projectName
    }
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
