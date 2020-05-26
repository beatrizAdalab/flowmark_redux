import Header from './Header';
import { connect } from 'react-redux';
import { getUser } from '../../store/selectors';
import { logout } from '../../store/actions';


function mapStateToProps(state, ownProps) {
  return {
    user: getUser(state)
  };
}

const mapDispatchToProps = {
  logoutUser: logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const HeaderConnected = connected(Header);

export default HeaderConnected;