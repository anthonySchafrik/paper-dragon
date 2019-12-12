import React from 'react';
import Root from '../Root';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SignUp } from './SignUp';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUp component should render', () => {
  let wrapper;

  let state = {
    userName: 'a',
    firstName: '',
    password: '',
    passwordCheck: ''
  };

  beforeEach(() => {
    wrapper = shallow(
      <Root>
        <SignUp {...state} />
      </Root>
    );
    console.log(wrapper.debug());
    console.log(wrapper.find('userName'));
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.dive().state().userName).to.equal('a');
  });
});
