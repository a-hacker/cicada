// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import ProjectSidebar from '../containers/ProjectSidebar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <ProjectSidebar>
        <div className={styles.container} data-tid="container">
          <div className={styles.settingsButton} data-tid="settingsButton">
            <Link to={routes.SETTINGS}>
              <i className="fa fa-cog" />
            </Link>
          </div>
          <div className={styles.unsetContainer} data-tid="unsetContainer">
            <Link to={routes.TICKETS}>View Tickets</Link>
          </div>
        </div>
      </ProjectSidebar>
    );
  }
}
