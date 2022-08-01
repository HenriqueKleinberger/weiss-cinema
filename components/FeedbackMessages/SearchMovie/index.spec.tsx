import React from 'react';
import { shallow } from 'enzyme';
import SearchMovie from './index';

describe('SearchMovie', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SearchMovie />);
    expect(wrapper).toMatchSnapshot();
  });
});
