import * as reducers from './reducers';
import * as TYPES from './types';

describe('reducers', () => {

  describe('user', () => {
    const initialState = {
      login: false,
      register: false,
      errorLogin: '',
      errorRegister: '',
      userName: '',
      userPassword: ''
    }

    test('should handle ANY action', () => {
      const action = {
        type: TYPES.ANY_ACTION,
      };
      const expectedState = [];
      expect(reducers.user(undefined, action)).toEqual(initialState);
    });


    test('should handle a TYPES.FETCH_REGISTER_SUCCESS action ', () => {
      const action = {
        type: TYPES.FETCH_REGISTER_SUCCESS,
        userName: 'Ana',
        userPassword: '1234'
      };
      const expectedState = {
        ...initialState,
        register: true,
        userName: action.userName,
        userPassword: action.userPassword,
      }
      expect(reducers.user(initialState, action)).toEqual(expectedState);
    });

    test('should handle a TYPES.FETCH_REGISTER_LOGIN action ', () => {
      const action = {
        type: TYPES.FETCH_LOGIN_SUCCESS,
        userName: 'Ana',
        userPassword: '1234'
      };
      const expectedState = {
        ...initialState,
        login: true,
        userName: action.userName,
        userPassword: action.userPassword,
      }
      expect(reducers.user(initialState, action)).toEqual(expectedState);
    });
  });
});