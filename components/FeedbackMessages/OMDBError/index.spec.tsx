import React from 'react';
import { shallow } from 'enzyme';
import OMDBError from './index';
import { MOVIE_NOT_FOUND } from '../../../constants/omdbResponse';

describe('OMDBError', () => {
  it('should match snapshot when is message is generic', () => {
    const wrapper = shallow(<OMDBError message="Error" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return MovieNotFound component when message equals movie not found', () => {
    const wrapper = shallow(<OMDBError message={MOVIE_NOT_FOUND} />);
    expect(wrapper.find('MovieNotFound').length).toBe(1);
  });
});
