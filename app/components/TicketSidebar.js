// @flow
import React, { Component } from 'react';
import { Project } from '../reducers/types';
import style from './TicketSidebar.css';

type Props = {
  project: Project
};

export default class Tickets extends Component<Props> {
  props: Props;

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
      <div style={style}>
        <div data-tid="tickets">{ticketForms}</div>
      </div>
    );
  }
}
