// @flow
import axios from 'axios';
import settings from 'electron-settings';

import type { Dispatch, Ticket } from '../reducers/types';

export const SET_TICKET = 'SET_TICKET';

export function initialize(
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

export function addTicket(issue: Ticket = {}) {
  return {
    type: SET_TICKET,
    context: issue
  };
}
