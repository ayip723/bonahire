import { connect } from 'react-redux';
import Greeting from '../components/Greeting';
import * as actions from '../actions/sessionActionCreators';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);
