// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import JiraConfig from './JiraConfig';
import ProjectConfig from './ProjectConfig';
import routes from '../constants/routes.json';
import ProjectSidebar from './ProjectSidebar';

type Props = {};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <ProjectSidebar>
        <div
          data-tid="backButton"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Link to={routes.HOME}>
            <i className="fa fa-times fa-3x" />
          </Link>
        </div>
        <JiraConfig />
        <br />
        <ProjectConfig />
      </ProjectSidebar>
    );
  }
}
