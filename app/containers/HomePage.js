// @flow
import React, { Component } from 'react';
import SettingsButton from '../components/SettingsButton';
import ProjectSidebar from './ProjectSidebar';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <ProjectSidebar>
        <SettingsButton />
      </ProjectSidebar>
    );
  }
}
