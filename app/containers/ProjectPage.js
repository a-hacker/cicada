// @flow
import React, { Component } from 'react';
import ProjectSidebar from './ProjectSidebar';
import TicketsPage from './TicketsPage';

type Props = {};

export default class ProjcetPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <ProjectSidebar>
        <TicketsPage />
      </ProjectSidebar>
    );
  }
}
