// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { Project } from '../reducers/types';
import routes from '../constants/routes.json';

type Props = {
  toggleSidebar: () => void,
  setProject: string => void,
  projects: Array<Project>,
  sidebarOpen: boolean,
  children: React.Node
};

const styles = {
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',
    backgroundColor: '#0f0f0f'
  }
};

export default class ProjectSidebar extends React.Component<Props> {
  props: Props;

  render() {
    const {
      setProject,
      projects,
      sidebarOpen,
      toggleSidebar,
      children
    } = this.props;

    const projectsContent = projects.map((project, i) => (
      <div className="btn-group" id={`project-${i}`}>
        <button onClick={() => setProject(project.projectName)} type="button">
          {project.projectName}
        </button>
      </div>
    ));

    projectsContent.push(
      <Link to={routes.NEW_PROJECT}>
        <button type="button">+</button>
      </Link>
    );

    return (
      <Sidebar
        sidebar={projectsContent}
        open={sidebarOpen}
        onSetOpen={toggleSidebar}
        sidebarId="project-sidebar"
        styles={styles}
        docked
      >
        {children}
      </Sidebar>
    );
  }
}
