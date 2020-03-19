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

    const jiraColorToCssColor = color => {
      switch (color) {
        case 'blue-gray':
          return 'Blue';
        case 'yellow':
          return 'Gold';
        case 'green':
          return 'Green';
        default:
          return 'Azure';
      }
    };

    const tickets = Array.from(project.tickets.values(), ticket => (
      <button
        type="button"
        onClick={() => updateView({ currentTicket: ticket })}
      >
        <div className={style.ticket}>
          <svg height="10" width="10">
            <circle
              cx="5"
              cy="4"
              r="3"
              stroke="white"
              strokeWidth="0"
              fill={jiraColorToCssColor(ticket.status.color)}
            />
          </svg>
          <a>{ticket.key}</a>
        </div>
      </button>
    ));

    return (
      <div className={style.ticketSidebar}>
        <div data-tid="tickets">{tickets}</div>
      </div>
    );
  }
}
