/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import React, { Component } from 'react';
import { Field } from 'redux-form';
import ProjectSidebar from '../containers/ProjectSidebar';
import styles from './JiraConfig.css';

type Props = {
  handleSubmit: () => void
};

export default class ProjectCreationForm extends Component<Props> {
  props: Props;

  render() {
    const { handleSubmit } = this.props;

    return (
      <ProjectSidebar>
        <form className={styles.settings} onSubmit={handleSubmit}>
          <label htmlFor="projectName">Project Name:</label>
          <div>
            <Field component="input" type="text" name="projectName" />
          </div>
          <label htmlFor="issueFilter">Issue Filter:</label>
          <div>
            <Field component="input" type="text" name="issueFilter" />
          </div>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </ProjectSidebar>
    );
  }
}
