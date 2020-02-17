import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tickets from '../components/Tickets';
import * as ProjectActions from '../actions/projects';

function mapStateToProps(state) {
  const { currentProject, projects } = state.projects;

  return {
    project: projects.get(currentProject)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
