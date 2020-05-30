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

//ALL CLASSIFIEDS

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

export const fetchClassifieds = (params) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchClassifiedsRequest());
    try {
      const classifieds = await ServiceCls.getClassifieds(params);
      if (classifieds.success) {
        dispatch(fetchClassifiedsSuccess(classifieds.results));
      } else {
        dispatch(fetchClassifiedsFailure(classifieds.error))
      }
    } catch (error) {
      dispatch(fetchClassifiedsFailure(error));
    }
  };


//EDIT CLASSIFIEDS

export const fetchEditClsRequest = () => ({
  type: TYPES.FETCH_EDIT_CLASSIFIED_REQUEST,
});

export const fetchEditClsFailure = error => ({
  type: TYPES.FETCH_EDIT_CLASSIFIED_FAILURE,
  error,
});

export const fetchEditClsSuccess = editClassified => ({
  type: TYPES.FETCH_EDIT_CLASSIFIED_SUCCESS,
  editClassified,
});

export const fetchEditClassified = (id, classified) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchEditClsRequest());
    try {
      const iseditCls = await ServiceCls.editClassified(id, classified);
      if (iseditCls.success) {
        dispatch(fetchEditClsSuccess(iseditCls));
      } else {
        dispatch(fetchEditClsFailure(iseditCls.error))
      }
    } catch (error) {
      dispatch(fetchEditClsFailure(error));
    }
  };

//NEW CLASSIFIEDS

export const fetchNewClsRequest = () => ({
  type: TYPES.FETCH_NEW_CLASSIFIED_REQUEST,
});

export const fetchNewClsFailure = error => ({
  type: TYPES.FETCH_NEW_CLASSIFIED_FAILURE,
  error,
});

export const fetchNewClsSuccess = editClassified => ({
  type: TYPES.FETCH_NEW_CLASSIFIED_SUCCESS,
  editClassified,
});

export const fetchNewClassified = (classified) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchNewClsRequest());
    try {
      const isNewCls = await ServiceCls.newClassified(classified);
      if (isNewCls.success) {
        dispatch(fetchNewClsSuccess(isNewCls));
      } else {
        dispatch(fetchNewClsFailure(isNewCls.error))
      }
    } catch (error) {
      dispatch(fetchNewClsFailure(error));
    }
  };

//DETAIL CLASSIFIEDS

export const fetchDetailClsRequest = () => ({
  type: TYPES.FETCH_DETAIL_CLASSIFIED_REQUEST,
});

export const fetchDetailClsFailure = error => ({
  type: TYPES.FETCH_DETAIL_CLASSIFIED_FAILURE,
  error,
});

export const fetchDetailClsSuccess = DetailCls => ({
  type: TYPES.FETCH_DETAIL_CLASSIFIED_SUCCESS,
  DetailCls,
});

export const fetchDetailClassified = (id) =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchDetailClsRequest());
    try {
      const DetailCls = await ServiceCls.getDetail(id);
      const classified = {
        name: DetailCls.name,
        price: DetailCls.price,
        description: DetailCls.description,
        tags: DetailCls.tags,
        type: DetailCls.type,
        photo: DetailCls.photo,
      };
      dispatch(fetchDetailClsSuccess(classified));
    } catch (error) {
      dispatch(fetchDetailClsFailure(error));
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

export const fetchTagsSuccess = tags => ({
  type: TYPES.FETCH_TAGS_SUCCESS,
  tags,
});

export const fetchTags = () =>
  async function (dispatch, getState, { ServiceCls }) {
    dispatch(fetchTagsRequest());
    try {
      const tags = await ServiceCls.getTags();
      dispatch(fetchTagsSuccess(tags));
    } catch (error) {
      dispatch(fetchTagsFailure(error));
    }
  };
