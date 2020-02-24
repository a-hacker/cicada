// @flow
import React, { Component } from 'react';
import { Ticket } from '../reducers/types';
import styles from './TicketDetails.css';

type Props = {
  ticket: Ticket
};

export default class Tickets extends Component<Props> {
  props: Props;

  render() {
    const { ticket } = this.props;

    return ticket !== undefined ? (
      <div className={styles.ticketDetails}>
        <div className={styles.mainPane}>
          <h2>{ticket.summary}</h2>
          <h4>{ticket.key}</h4>
          <label htmlFor="description">
            Description
            <p name="description">{ticket.description}</p>
          </label>
        </div>
        <div className="sidePane">
          <label htmlFor="status">
            Status
            <p name="status">{ticket.status.name}</p>
          </label>
          <br />
          <label htmlFor="assignee">
            Assignee
            <p name="assignee">{ticket.assignee}</p>
          </label>
          <br />
          <label htmlFor="issueType">
            Issue Type
            <p name="issueType">{ticket.issueType}</p>
          </label>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}
