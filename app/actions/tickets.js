// @flow
// import axios from 'axios';

import type { Dispatch, Ticket } from '../reducers/types';

export const SET_TICKET = 'SET_TICKET';
// export const MODIFY_TICKET = 'MODIFY_TICKET'; // TODO: allow modifying the actual ticket

export function initialize() {
  return (dispatch: Dispatch) => {
    // axios
    //   .get(
    //     `https://datarobot.atlassian.net/rest/api/latest/search?${jql ? 'jql=' + jql + '&' : ''}fields=id,key,description,summary,status`)
    //   .then(response => {
    //       response.data.issues.forEach(issue => {
    //           dispatch(addTicket());
    //       });
    //   }).catch(reason => {
    //   console.error("Couldn't do the thing.")
    // });
    const dummyTickets = [
      {
        summary: 'My First Ticket',
        key: 'DM-1234'
      },
      {
        summary: 'My Second Ticket',
        key: 'DM-4321'
      }
    ];

    dummyTickets.forEach(issue => {
      dispatch(addTicket(issue));
    });
  };
}

export function addTicket(issue: Ticket = {}) {
  return {
    type: SET_TICKET,
    context: issue
  };
}
