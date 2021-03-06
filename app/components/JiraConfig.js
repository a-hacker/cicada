// @flow
import React, { Component } from 'react';
import { JiraSettings } from '../reducers/types';
import styles from './JiraConfig.css';

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
      <div>
        <h2>Server Settings</h2>
        <form className={styles.settings}>
          <label htmlFor="host">
            Host:
            <input
              type="text"
              name="host"
              onChange={e => saveSettings('host', e.target.value)}
              value={jiraConfig.host}
            />
          </label>
          <br />
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              onChange={e => saveSettings('username', e.target.value)}
              value={jiraConfig.username}
            />
          </label>
          <br />
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
      </div>
    );
  }
}
