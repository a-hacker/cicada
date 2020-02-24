// @flow
import React, { Component } from 'react';
import { Project } from '../reducers/types';
import style from './TicketSidebar.css';

type Props = {
  project: Project,
  updateView: Object => void
};

export default class TicketSidebar extends Component<Props> {
  props: Props;

  render() {
    const { project, updateView } = this.props;

    const tickets = Array.from(project.tickets.values(), ticket => (
      <button
        type="button"
        onClick={() => updateView({ currentTicket: ticket })}
      >
        {ticket.key}
      </button>
    ));

    return (
      <div className={style.ticketSidebar}>
        <div data-tid="tickets">{tickets}</div>
      </div>
    );
  }
}
