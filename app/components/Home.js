// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <div className={styles.unsetContainer} data-tid="unsetContainer">
            <Link to={routes.TICKETS}>View Tickets</Link>
          </div>
        </div>
      </div>
    );
  }
}
