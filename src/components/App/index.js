import { connect } from 'react-redux';

import App from './App';
import { getUi, getUser } from '../../store/selectors';
import { logout } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    ui: getUi(state),
    user: getUser(state)
  };
}

const mapDispatchToProps = {
  logoutUser: logout
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;