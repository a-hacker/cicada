import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tickets from '../components/Tickets';
import * as TicketActions from '../actions/tickets';

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TicketActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
