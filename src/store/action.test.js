import * as actions from './actions';
import * as TYPES from './types'

describe('actions', () => {
  describe('logout', () => {
    test('should create a USER_LOGOUT action', () => {
      const expectedAction = {
        type: TYPES.USER_LOGOUT
      };
      expect(actions.logout()).toEqual(
        expectedAction
      );
    });
  });
  describe('saveUserData', () => {
    test('should create a SET_USER action with userName and userPassword', () => {
      const userName = 'Ana';
      const userPassword = '1234';
      const expectedAction = {
        type: TYPES.SET_USER,
        userName,
        userPassword
      };
      expect(actions.saveUserData(userName, userPassword)).toEqual(
        expectedAction
      );
    });
  });
})

