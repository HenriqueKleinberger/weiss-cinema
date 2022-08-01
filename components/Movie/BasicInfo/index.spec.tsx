import React from 'react';
import { shallow } from 'enzyme';
import BasicInfo from './index';

import {
  isMovieOnLocalStorage,
  toggleMovieOnLocalStorage,
} from '../../../helpers/localStorageWishlist';
import { Like } from './styles';

jest.mock('../../../helpers/localStorageWishlist', () => ({
  toggleMovieOnWishlist: jest.fn(),
  isMovieOnWishlist: jest.fn(),
  getMoviesFromLocalStorage: jest.fn(),
}));

describe('BasicInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot when movie is not on wishlist', () => {
    (isMovieOnLocalStorage as jest.Mock).mockReturnValue(false);
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
      />
    );
    expect(wrapper.find(Like).at(0).props().active).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when movie is on wishlist', () => {
    (isMovieOnLocalStorage as jest.Mock).mockReturnValue(true);
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
      />
    );
    expect(wrapper.find(Like).at(0).props().active).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('title needs to be shorten when is bigger than 90 characters', () => {
    (isMovieOnLocalStorage as jest.Mock).mockReturnValue(true);
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulput',
          year: '2022',
        }}
      />
    );
    expect(wrapper.find('p').at(0).text()).toBe(
      'LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT. NULLAM FEUGIAT, TURPIS AT PULVIN...'
    );
  });

  it('should call toggleMovieOnWishlist when click the like button', () => {
    const stopPropagation = jest.fn();
    const removeMovieFromWishlist = jest.fn();
    const wrapper = shallow(
      <BasicInfo
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
        removeMovieFromWishlist={removeMovieFromWishlist}
      />
    );
    wrapper.find(Like).at(0).simulate('click', { stopPropagation });

    expect(toggleMovieOnLocalStorage).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
    expect(removeMovieFromWishlist).toHaveBeenCalledTimes(1);
  });
});
