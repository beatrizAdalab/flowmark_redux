import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';
import { element } from 'prop-types';

describe('Register', () => {
  const props = {
    user: {
      login: false,
      register: false,
      errorLogin: "",
      errorRegister: "",
      userName: "",
      userPassword: "",
    },
    ui: {
      error: null,
      isFetching: false
    },
    logoutUser: jest.fn(),
    registerUser: jest.fn((userName, userPassword) => { }),
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register  {...props} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should register user with userName and userPassword', () => {
    const e = { preventDefault: jest.fn() }
    const value = { userName: 'Ana', userPassword: '1234' }

    wrapper.find('Form').props().formSubmit(e, value)
    expect(props.registerUser).toHaveBeenCalledWith("Ana", "1234");
  });
});