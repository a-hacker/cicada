import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TicketSidebar from '../components/TicketSidebar';
import * as ProjectActions from '../actions/projects';
import * as ViewActions from '../actions/views';

function mapStateToProps(state) {
  const { currentProject, projects } = state.projects;

  return {
    project: projects.get(currentProject)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ProjectActions, ...ViewActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketSidebar);
