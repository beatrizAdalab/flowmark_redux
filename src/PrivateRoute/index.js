import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { isUserRegistered, isUserLogged } from '../store/selectors';

const mapStateToProps = state => ({
  isRegistered: isUserRegistered(state),
  isLogged: isUserLogged(state),
})

const connected = connect(mapStateToProps);
const PrivateRouteConnected = connected(PrivateRoute);

export default PrivateRouteConnected;
