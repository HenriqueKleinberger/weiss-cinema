import React from 'react';
import { shallow } from 'enzyme';
import EmptyWishlist from './index';

describe('EmptyWishlist', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<EmptyWishlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
