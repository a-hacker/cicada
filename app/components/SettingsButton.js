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
      <div className={styles.settingsButton} data-tid="settingsButton">
        <Link to={routes.SETTINGS}>
          <i className="fa fa-cog fa-2x" />
        </Link>
      </div>
    );
  }
}
