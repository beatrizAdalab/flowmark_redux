import Register from './Register';
import { connect } from 'react-redux';
import { getUi, getUser } from '../../store/selectors';
import { fetchRegister, logout } from '../../store/actions';


function mapStateToProps(state, ownProps) {
  return {
    ui: getUi(state),
    user: getUser(state)
  };
}

const mapDispatchToProps = {
  registerUser: fetchRegister,
  logoutUser: logout,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const RegisterConnected = connected(Register);


export default RegisterConnected;