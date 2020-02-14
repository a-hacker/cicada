// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import ProjectSidebar from './ProjectSidebar';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <ProjectSidebar />
        <Home />
      </div>
    );
  }
}
