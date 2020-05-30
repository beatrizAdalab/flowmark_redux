import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

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
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register  {...props} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
});