// @flow
import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { Project } from '../reducers/types';

type Props = {
  addProject: string => void,
  toggleSidebar: () => void,
  setProject: string => void,
  projects: Array<Project>,
  sidebarOpen: boolean
};

export default class ProjectSidebar extends Component<Props> {
  props: Props;

  render() {
    const {
      addProject,
      setProject,
      projects,
      sidebarOpen,
      toggleSidebar
    } = this.props;

    const projectsContent = projects.map((project, i) => (
      <div className="btn-group" id={`project-${i}`}>
        <button onClick={() => setProject(project.projectName)} type="button">
          {project.projectName}
        </button>
      </div>
    ));

    projectsContent.push(
      <button onClick={() => addProject('TEST')} type="button">
        +
      </button>
    );

    return (
      <Sidebar
        sidebar={projectsContent}
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        sidebarId="project-sidebar"
        docked
      />
    );
  }
}
