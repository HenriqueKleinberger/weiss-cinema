import React from 'react';
import { shallow } from 'enzyme';
import BasicInfo from './index';

describe('BasicInfo', () => {
  it('should match snapshot when movie is not on wishlist', () => {
    const wrapper = shallow(<BasicInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
