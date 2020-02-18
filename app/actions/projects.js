// @flow
import axios from 'axios';
import settings from 'electron-settings';
import { Project, Ticket, Dispatch } from '../reducers/types';

export const ADD_PROJECT = 'ADD_PROJECT';
export const SET_PROJECT = 'SET_PROJECT';
export const ADD_TICKET = 'ADD_TICKET';

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

export function addTicket(ticket: Ticket) {
  return {
    type: ADD_TICKET,
    context: ticket
  };
}

export function refreshTickets(
  jql: string = 'assignee = austin.hacker and status = "In Progress"'
) {
  const hostName = settings.get('host');
  const username = settings.get('username');
  const token = settings.get('token');
  return (dispatch: Dispatch) => {
    axios
      .get(
        `${hostName}/rest/api/latest/search?${
          jql.length > 0 ? `jql=${jql}&` : ''
        }fields=id,key,description,summary,status`,
        {
          auth: {
            username,
            password: token
          },
          headers: {
            'X-Atlassian-Token': 'nocheck'
          }
        }
      )
      .then(response => {
        return response.data.issues.forEach(issue => {
          dispatch(addTicket(issue));
        });
      })
      .catch(() => {
        console.error("Couldn't do the thing.");
      });
  };
}
