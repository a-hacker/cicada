import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import ProjectCreationForm from '../components/ProjectCreationForm';
import * as ProjectActions from '../actions/projects';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ProjectActions }, dispatch);
}

const connectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectCreationForm);

export default reduxForm({
  form: 'projectCreation',
  onSubmit: (values, dispatch) => dispatch(ProjectActions.addProject(values))
})(connectedForm);
