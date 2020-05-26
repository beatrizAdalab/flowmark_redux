import * as TYPES from './types';

//state initial 

const stateInitial = {
  user: {
    login: false,
    register: false,
    errorLogin: '',
    errorRegister: '',
    userName: '',
    userPassword: ''
  },
  store: {
    classifieds: [],
    tags: [],
    error: '',
    newClassified: '',
    classified: {
      name: '',
      price: 0,
      description: '',
      tags: [],
      type: '',
      photo: '',
    }
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
        register: true,
        userName: action.userName,
        userPassword: action.userPassword,
      }

    case TYPES.FETCH_REGISTER_FAILURE:
      return {
        ...state,
        register: false,
        errorRegister: action.errorRegister,
        userName: '',
        userPassword: '',
      }

    case TYPES.FETCH_LOGIN_REQUEST:
      return {
        ...state
      }

    case TYPES.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        userName: action.userName,
        userPassword: action.userPassword,
      }

    case TYPES.FETCH_LOGIN_FAILURE:
      return {
        ...state,
        login: false,
        errorLogin: action.errorLogin,
        userName: '',
        userPassword: '',
      }

    case TYPES.SET_USER:
      return {
        ...state,
        userName: action.userName,
        userPassword: action.userPassword,
      }

    case TYPES.USER_LOGOUT:
      return {
        ...state,
        login: false,
        register: false,
        errorLogin: '',
        errorRegister: '',
        userName: '',
        userPassword: '',
      }

    default:
      return state;
  }
};

export function store(state = stateInitial.store, action) {
  switch (action.type) {
    case TYPES.FETCH_CLASSIFIEDS_REQUEST:
      return {
        ...state
      }
    case TYPES.FETCH_CLASSIFIEDS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case TYPES.FETCH_CLASSIFIEDS_SUCCESS:
      return {
        ...state,
        classifieds: action.classifieds
      }
    case TYPES.FETCH_DETAIL_CLASSIFIED_REQUEST:
      return {
        ...state
      }
    case TYPES.FETCH_DETAIL_CLASSIFIED_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case TYPES.FETCH_DETAIL_CLASSIFIED_SUCCESS:
      return {
        ...state,
        classified: action.DetailCls
      }
    case TYPES.FETCH_EDIT_CLASSIFIED_REQUEST:
      return {
        ...state
      }
    case TYPES.FETCH_EDIT_CLASSIFIED_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case TYPES.FETCH_EDIT_CLASSIFIED_SUCCESS:
      return {
        ...state,
        classified: action.classified
      }
    case TYPES.FETCH_NEW_CLASSIFIED_REQUEST:
      return {
        ...state
      }
    case TYPES.FETCH_NEW_CLASSIFIED_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case TYPES.FETCH_NEW_CLASSIFIED_SUCCESS:
      return {
        ...state,
        classified: action.classified
      }
    case TYPES.FETCH_TAGS_REQUEST:
      return {
        ...state
      }
    case TYPES.FETCH_TAGS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case TYPES.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        tags: action.tags
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