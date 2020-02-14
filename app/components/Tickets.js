// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../constants/routes.json';
import { Ticket } from '../reducers/types';

type Props = {
  initialize: () => void,
  tickets: Array<Ticket>
};

export default class Tickets extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { initialize } = this.props;
    initialize();
  }

  render() {
    const { tickets } = this.props;

    const ticketForms = tickets.map(ticket => (
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
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div data-tid="tickets">{ticketForms}</div>
      </div>
    );
  }
}
