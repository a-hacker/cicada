import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ProjectSidebar from '../components/ProjectSidebar';
import * as ProjectActions from '../actions/projects';
import * as SidebarActions from '../actions/sidebar';
import * as ViewActions from '../actions/views';

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    sidebarOpen: state.sidebar
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...ProjectActions, ...SidebarActions, ...ViewActions },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSidebar);
