// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import JiraConfig from './JiraConfig';
import routes from '../constants/routes.json';

type Props = {};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <JiraConfig />
      </div>
    );
  }
}
