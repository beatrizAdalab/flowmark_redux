import * as TYPES from './types';

//REGISTER
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

// LOGOUT
export const logout = () => ({
  type: TYPES.USER_LOGOUT
});

//LOGIN
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

export const saveUserData = (userName, userPassword) => ({
  type: TYPES.SET_USER,
  userName,
  userPassword
});

//CLASSIFIEDS

export const fetchClassifiedsRequest = () => ({
  type: TYPES.FETCH_CLASSIFIEDS_REQUEST,
});

export const fetchClassifiedsFailure = error => ({
  type: TYPES.FETCH_CLASSIFIEDS_FAILURE,
  error,
});

export const fetchClassifiedsSuccess = classifieds => ({
  type: TYPES.FETCH_CLASSIFIEDS_SUCCESS,
  classifieds,
});

export const fetchClassifieds = () =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchClassifiedsRequest());
    try {
      const classifieds = await ServiceCls.getClassifieds();
      dispatch(fetchClassifiedsSuccess(classifieds));
    } catch (error) {
      dispatch(fetchClassifiedsFailure(error));
    }
  };

//TAGS

export const fetchTagsRequest = () => ({
  type: TYPES.FETCH_TAGS_REQUEST,
});

export const fetchTagsFailure = error => ({
  type: TYPES.FETCH_TAGS_FAILURE,
  error,
});

export const fetchTagsSuccess = classifieds => ({
  type: TYPES.FETCH_TAGS_SUCCESS,
  classifieds,
});

export const fetchTags = () =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchTagsRequest());
    try {
      const classifieds = await ServiceCls.getTags();
      dispatch(fetchTagsSuccess(classifieds));
    } catch (error) {
      dispatch(fetchTagsFailure(error));
    }
  };
