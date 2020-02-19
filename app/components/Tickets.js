// @flow
import React, { Component } from 'react';
import { Ticket, Project } from '../reducers/types';

type Props = {
  refreshTickets: string => void,
  project: Project,
  tickets: Map<string, Ticket>
};

export default class Tickets extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { refreshTickets, project } = this.props;
    if (project.issueFilter !== undefined) {
      refreshTickets(project.issueFilter);
    }
  }

  render() {
    const { project } = this.props;

    const ticketForms = Array.from(project.tickets.values(), ticket => (
      <form onSubmit={() => {}}>
        <label htmlFor={`ticket-${ticket.key}`}>
          Key:
          <input type="text" name={`ticket-${ticket.key}`} value={ticket.key} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    ));

    return (
      <div>
        <div data-tid="tickets">{ticketForms}</div>
      </div>
    );
  }
}
