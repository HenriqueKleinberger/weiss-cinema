import React from 'react';
import { shallow } from 'enzyme';
import Like from './index';
import { Button } from './styles';

import {
  isMovieOnLocalStorage,
  toggleMovieOnLocalStorage,
} from '../../../helpers/localStorageWishlist';

jest.mock('../../../helpers/localStorageWishlist', () => ({
  toggleMovieOnLocalStorage: jest.fn(),
  isMovieOnLocalStorage: jest.fn(),
  getMoviesFromLocalStorage: jest.fn(),
}));

describe('Like', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should match snapshot when movie is not on wishlist', async () => {
    (isMovieOnLocalStorage as jest.Mock).mockReturnValue(false);
    const wrapper = await shallow(
      <Like
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
      />
    );
    wrapper.update();
    expect(wrapper.find(Button).at(0).props().active).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleMovieOnWishlist when click the button', async () => {
    const stopPropagation = jest.fn();
    const removeMovieFromWishlist = jest.fn();
    const wrapper = await shallow(
      <Like
        movie={{
          imdbID: '1234',
          poster: 'poster',
          title: 'Title',
          year: '2022',
        }}
        action={removeMovieFromWishlist}
      />
    );
    wrapper.update();
    wrapper.find(Button).at(0).simulate('click', { stopPropagation });

    expect(toggleMovieOnLocalStorage).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
    expect(removeMovieFromWishlist).toHaveBeenCalledTimes(1);
  });
});
