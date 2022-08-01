import React from 'react';
import { shallow } from 'enzyme';
import MovieLoading from './index';

describe('MovieLoading', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MovieLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
