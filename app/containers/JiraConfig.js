import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JiraConfig from '../components/JiraConfig';
import * as JiraConfigActions from '../actions/jiraConfig';

function mapStateToProps(state) {
  return {
    jiraConfig: state.jiraConfig
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(JiraConfigActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(JiraConfig);
