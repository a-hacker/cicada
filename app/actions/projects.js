// @flow
import axios from 'axios';
import settings from 'electron-settings';
import { Project, Ticket, Dispatch } from '../reducers/types';
import parseIssueData from '../utils/ticketConveter';

export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';
export const ADD_TICKET = 'ADD_TICKET';
export const MODIFY_PROJECT = 'MODIFY_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export function addProject(project: Project) {
  settings.set(`projects.${project.projectName}`, project);
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

export function modifyProject(projectName: string, project: Project) {
  return {
    type: MODIFY_PROJECT,
    context: {
      projectName,
      project
    }
  };
}

export function removeProject(projectName: string) {
  settings.delete(`projects.${projectName}`);
  return {
    type: REMOVE_PROJECT,
    context: {
      projectName
    }
  };
}

export function addTicket(projectName: string, ticket: Ticket) {
  return {
    type: ADD_TICKET,
    context: {
      projectName,
      ticket
    }
  };
}

export function refreshTickets(project: Project) {
  const hostName = settings.get('host');
  const username = settings.get('username');
  const token = settings.get('token');
  const filterJql =
    project.issueFilter !== undefined ? project.issueFilter : '';
  const pinnedJql = project.pinnedIssues
    .map(issue => `key="${issue}"`)
    .join(' OR ');
  return (dispatch: Dispatch) => {
    getJiraIssues(
      hostName,
      username,
      token,
      project.projectName,
      filterJql,
      dispatch
    );
    getJiraIssues(
      hostName,
      username,
      token,
      project.projectName,
      pinnedJql,
      dispatch
    );
  };
}

function getJiraIssues(hostname, username, token, projectName, jql, dispatch) {
  if (jql === '') {
    return null;
  }
  return axios
    .get(`${hostname}/rest/api/latest/search?jql=${jql}`, {
      auth: {
        username,
        password: token
      },
      headers: {
        'X-Atlassian-Token': 'nocheck'
      }
    })
    .then(response => {
      return processIssues(response.data.issues, projectName, dispatch);
    })
    .catch(error => {
      console.warn('Failed to get tickets with query', jql);
      console.error(error);
    });
}

function processIssues(issues, projectName, dispatch) {
  return issues.forEach(issue => {
    const ticketData = parseIssueData(issue);
    dispatch(addTicket(projectName, ticketData));
  });
}
