import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectSidebar from '../components/ProjectSidebar';
import * as ProjectActions from '../actions/projects';
import * as SidebarActions from '../actions/sidebar';

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    sidebarOpen: state.sidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ProjectActions, ...SidebarActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSidebar);
