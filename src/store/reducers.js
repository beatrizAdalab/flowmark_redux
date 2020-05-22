import * as TYPES from './types';

//state initial 

const stateInitial = {
  user: {
    login: false,
    register: false,
    error: '',
    errorRegister: '',
    userName: '',
    userPassword: ''
  },
  ui: {
    error: null,
    isFetching: false,
  }
};

export function user(state = stateInitial.user, action) {
  switch (action.type) {
    case TYPES.FETCH_REGISTER_REQUEST:
      return {
        ...state
      }

    case TYPES.FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        login: false,
        register: true,
        error: '',
        errorRegister: '',
        userName: action.userName,
        userPassword: action.userPassword,
      }

    case TYPES.FETCH_REGISTER_FAILURE:
      return {
        ...state,
        login: false,
        register: false,
        error: '',
        errorRegister: action.errorRegister,
        userName: '',
        userPassword: '',
      }

    case TYPES.USER_LOGOUT:
      return {
        ...state,
        login: false,
        register: false,
        error: '',
        errorRegister: '',
        userName: '',
        userPassword: '',
      }

    default:
      return state;
  }
};


export function ui(state = stateInitial.ui, action) {
  if (/_REQUEST$/.test(action.type)) {
    return {
      ...state,
      isFetching: true,
      error: null,
    };
  }

  if (/_SUCCESS$/.test(action.type)) {
    return {
      ...state,
      isFetching: false,
      error: null,
    };
  }

  if (/_FAILURE$/.test(action.type)) {
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  }

  return state;
}