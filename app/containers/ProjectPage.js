// @flow
import React, { Component } from 'react';
import ProjectSidebar from './ProjectSidebar';
import TicketsPage from './TicketsPage';
import SettingsButton from '../components/SettingsButton';

type Props = {};

export default class ProjcetPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <ProjectSidebar>
        <SettingsButton />
        <TicketsPage />
      </ProjectSidebar>
    );
  }
}
