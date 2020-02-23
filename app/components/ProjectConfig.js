// @flow
import React, { Component } from 'react';
import { Project } from '../reducers/types';
import styles from './JiraConfig.css';

type Props = {
  project: Project,
  currentProject: string,
  modifyProject: (string, Project) => void,
  removeProject: string => void
};

export default class JiraConfig extends Component<Props> {
  props: Props;

  render() {
    const {
      modifyProject,
      project,
      currentProject,
      removeProject
    } = this.props;
    return (
      currentProject !== undefined &&
      project !== undefined && (
        <div>
          <h2>Project Settings</h2>
          <form className={styles.settings}>
            <label htmlFor="projectName">
              Project Name:
              <input
                type="text"
                name="projectName"
                onChange={e =>
                  modifyProject(currentProject, { projectName: e.target.value })
                }
                value={project.projectName}
              />
            </label>
            <br />
            <label htmlFor="issueFilter">
              Issue Filter:
              <input
                type="text"
                name="issueFilter"
                onChange={e =>
                  modifyProject(currentProject, { issueFilter: e.target.value })
                }
                value={project.issueFilter}
              />
            </label>
            <br />
            <button
              id="projectDelete"
              type="button"
              className="btn-danger"
              onClick={() => removeProject(currentProject)}
            >
              Delete Project
            </button>
          </form>
        </div>
      )
    );
  }
}
