import Login from './Login';
import { connect } from 'react-redux';
import { getUi, getUser } from '../../store/selectors';
import { fetchLogin } from '../../store/actions';

function mapStateToProps(state, ownProps) {
  return {
    ui: getUi(state),
    user: getUser(state)
  };
}

const mapDispatchToProps = {
  loginUser: fetchLogin,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const LoginConnected = connected(Login);


export default LoginConnected;

