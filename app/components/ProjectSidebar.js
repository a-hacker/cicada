// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { Project } from '../reducers/types';
import routes from '../constants/routes.json';
import contentStyles from './ProjectSidebar.css';

type Props = {
  toggleSidebar: () => void,
  setProject: Project => void,
  refreshTickets: string => void,
  projects: Array<Project>,
  sidebarOpen: boolean,
  children: React.Node
};

const styles = {
  sidebar: {
    zIndex: 2,
    position: 'absolute',
    width: '70px',
    top: 0,
    bottom: 0,
    transition: '',
    WebkitTransition: '',
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
      refreshTickets,
      projects,
      sidebarOpen,
      toggleSidebar,
      children
    } = this.props;

    const projectsContent = Array.from(projects.values(), project => (
      <Link to={routes.TICKETS}>
        <button
          onClick={() => {
            setProject(project.projectName);
            refreshTickets(project);
          }}
          type="button"
        >
          {project.projectName}
        </button>
      </Link>
    ));

    projectsContent.push(
      <Link to={routes.NEW_PROJECT}>
        <button type="button">+</button>
      </Link>
    );

    const projectGroup = (
      <div
        className={`${contentStyles.sidebar} btn-toolbar`}
        id="project-buttons"
      >
        {projectsContent}
      </div>
    );

    return (
      <Sidebar
        sidebar={projectGroup}
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
