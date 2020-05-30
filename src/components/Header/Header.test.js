import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header', () => {
  const logout = {
    login: false,
    register: false,
    errorLogin: '',
    errorRegister: '',
    userName: '',
    userPassword: ''
  };

  const props = {
    user: {
      login: true,
      register: false,
      errorLogin: '',
      errorRegister: '',
      userName: 'userTwo34',
      userPassword: '34'
    },
    logoutUser: jest.fn().mockResolvedValue(logout)
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  test('snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should logout to user', () => {
    wrapper.find('button').simulate('click');
    expect(props.logoutUser).toHaveBeenCalled();
  });
});