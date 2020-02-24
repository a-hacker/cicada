import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TicketDetails from '../components/TicketDetails';
import * as ProjectActions from '../actions/projects';

function mapStateToProps(state) {
  const { currentTicket } = state.views;

  return {
    ticket: currentTicket
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ProjectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);
