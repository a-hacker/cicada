/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React, { Component, useState } from 'react';
import { Project } from '../reducers/types';
import styles from './JiraConfig.css';

type Props = {
  project: Project,
  currentProject: string,
  issueToPin: string,
  modifyProject: (string, Project) => void,
  removeProject: string => void,
  setIssue: string => void
};

class ProjectConfig extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
    this.pinIssue = this.pinIssue.bind(this);
    this.unpinIssue = this.unpinIssue.bind(this);
  }

  pinIssue = () => {
    const {
      project,
      issueToPin,
      currentProject,
      modifyProject,
      setIssue
    } = this.props;
    const currentPins = project.pinnedIssues;
    currentPins.push(issueToPin);
    modifyProject(currentProject, { pinnedIssues: currentPins });
    setIssue('');
  };

  unpinIssue = (issue: string) => {
    const { project, currentProject, modifyProject } = this.props;
    let currentPins = project.pinnedIssues;
    currentPins = currentPins.filter(pin => pin !== issue);
    modifyProject(currentProject, { pinnedIssues: currentPins });
  };

  render() {
    const {
      modifyProject,
      project,
      issueToPin,
      currentProject,
      removeProject,
      setIssue
    } = this.props;

    const pinnedIssues = project.pinnedIssues.map(pin => (
      <div>
        <b>{pin}</b>
        <button
          id={`unpin_${pin}`}
          type="button"
          className="btn-danger"
          onClick={() => this.unpinIssue(pin)}
        >
          x
        </button>
        <br />
      </div>
    ));

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
            <div>
              <label htmlFor="issueToPin">
                Pinned Issues:
                <input
                  type="text"
                  name="issueToPin"
                  value={issueToPin}
                  onChange={e => setIssue(e.target.value)}
                />
              </label>
              <button id="pinIssue" type="button" onClick={this.pinIssue}>
                Pin
              </button>
              <br />
              {pinnedIssues}
            </div>
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

export default function projectConfig(props: Props) {
  const [issueToPin, setIssue] = useState('');
  return (
    <ProjectConfig {...props} issueToPin={issueToPin} setIssue={setIssue} />
  );
}
