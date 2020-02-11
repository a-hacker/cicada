// @flow
import React, { Component } from 'react';
import { JiraSettings } from '../reducers/types';

type Props = {
  initializeSettings: () => void,
  saveSettings: (string, string) => void,
  jiraConfig: JiraSettings
};

export default class JiraConfig extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { initializeSettings } = this.props;
    initializeSettings();
  }

  render() {
    const { saveSettings, jiraConfig } = this.props;
    return (
      <form>
        <label htmlFor="host">
          Host:
          <input
            type="text"
            name="host"
            onChange={e => saveSettings('host', e.target.value)}
            value={jiraConfig.host}
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            onChange={e => saveSettings('username', e.target.value)}
            value={jiraConfig.username}
          />
        </label>
        <label htmlFor="token">
          API Token:
          <input
            type="text"
            name="token"
            onChange={e => saveSettings('token', e.target.value)}
            value={jiraConfig.token}
          />
        </label>
      </form>
    );
  }
}
