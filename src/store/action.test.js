import * as actions from './actions';
import * as TYPES from './types'

describe('actions', () => {
  describe('logout', () => {
    test('should create a USER_LOGOUT action', () => {
      const expectedAction = {
        type: TYPES.USER_LOGOUT,
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
        userPassword,
      };
      expect(actions.saveUserData(userName, userPassword)).toEqual(
        expectedAction
      );
    });
  });
});

describe('fetchRegister', () => {
  const dispatch = jest.fn();
  const userName = 'Ana';
  const userPassword = '1234';
  const getState = () => { };
  const action = actions.fetchRegister(userName, userPassword);

  test('should dispatch FETCH_REGISTER_REQUEST and FETCH_REGISTER_SUCCESS action', async () => {
    const isRegister = { success: true };
    const ServiceCls = {
      register: jest.fn().mockReturnValueOnce(isRegister)
    };

    await action(dispatch, getState, { ServiceCls });

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.FETCH_REGISTER_REQUEST,
    });

    expect(ServiceCls.register).toHaveBeenCalled();

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.FETCH_REGISTER_SUCCESS,
      userName,
      userPassword
    });
  });

  test('should dispatch FETCH_REGISTER_REQUEST and FETCH_REGISTER_FAILURE action', async () => {
    const error = 'error';
    const isRegister = { success: false, error: 'success.error' };
    const ServiceCls = {
      register: jest.fn().mockReturnValueOnce(isRegister).mockRejectedValue(error)
    };

    await action(dispatch, getState, { ServiceCls });

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: TYPES.FETCH_REGISTER_REQUEST,
    });

    expect(ServiceCls.register).toHaveBeenCalled();

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.FETCH_REGISTER_FAILURE,
      errorRegister: 'success.error'
    });

    await action(dispatch, getState, { ServiceCls });

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPES.FETCH_REGISTER_FAILURE,
      errorRegister: 'error'
    });
  });
});




