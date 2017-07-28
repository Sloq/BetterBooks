import Navbar from './navbar';
import { connect } from 'react-redux';
import { allBookTitles } from '../../reducers/selectors';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({

  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
