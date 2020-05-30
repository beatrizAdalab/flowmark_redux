import * as selectors from './selectors';


describe('selector USER', () => {
  const initialState = {
    user: {
      login: true,
      register: false,
      errorLogin: '',
      errorRegister: '',
      userName: 'Ana',
      userPassword: '1234'
    }
  };

  test('should get all data of user', () => {
    expect(selectors.getUser(initialState)).toEqual(initialState.user)
  });

  test('should return if the user is registered', () => {
    expect(selectors.isUserRegistered(initialState)).toEqual(false)
  });

  test('should return if the user is logged in', () => {
    expect(selectors.isUserLogged(initialState)).toEqual(true)
  });
})
