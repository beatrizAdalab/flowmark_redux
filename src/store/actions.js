import * as TYPES from './types';

//register
export const fetchRegisterRequest = () => ({
  type: TYPES.FETCH_REGISTER_REQUEST,
});

export const fetchRegisterFailure = errorRegister => ({
  type: TYPES.FETCH_REGISTER_FAILURE,
  errorRegister,
});

export const fetchRegisterSuccess = (userName, userPassword) => ({
  type: TYPES.FETCH_REGISTER_SUCCESS,
  userName,
  userPassword
});

export const fetchRegister = (userName, userPassword) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchRegisterRequest());
    try {
      const isRegister = await ServiceCls.register(userName, userPassword);
      if (isRegister.success) {
        dispatch(fetchRegisterSuccess(userName, userPassword))
      }
      else {
        dispatch(fetchRegisterFailure(isRegister.error))
      }
    } catch (errorRegister) {
      dispatch(fetchRegisterFailure(errorRegister));
    }
  };

//logout
export const logout = () => ({
  type: TYPES.USER_LOGOUT
});

//login
export const fetchLoginRequest = () => ({
  type: TYPES.FETCH_LOGIN_REQUEST,
});

export const fetchLoginFailure = errorLogin => ({
  type: TYPES.FETCH_LOGIN_FAILURE,
  errorLogin,
});

export const fetchLoginSuccess = (userName, userPassword) => ({
  type: TYPES.FETCH_LOGIN_SUCCESS,
  userName,
  userPassword
});

export const fetchLogin = (userName, userPassword) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchLoginRequest());
    try {
      const isLogin = await ServiceCls.login(userName, userPassword);
      if (isLogin.success) {
        dispatch(fetchLoginSuccess(userName, userPassword))
      }
      else {
        dispatch(fetchLoginFailure(isLogin.error))
      }
    } catch (errorLogin) {
      dispatch(fetchLoginFailure(errorLogin));
    }
  };
