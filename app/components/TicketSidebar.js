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
      <button type="button">{ticket.key}</button>
    ));

    return (
      <div className={style.ticketSidebar}>
        <div data-tid="tickets">{ticketForms}</div>
      </div>
    );
  }
}
