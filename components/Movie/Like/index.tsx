import React, { useState, useEffect } from 'react';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../../../constants/messages';
import { Button } from './styles';
import WishlistHeart from '../../../public/heart-solid.svg';
import {
  isMovieOnLocalStorage,
  toggleMovieOnLocalStorage,
} from '../../../helpers/localStorageWishlist';
import { IMovie } from '../../../types';

interface IProps {
  movie: IMovie;
  toggleMovieWishlistCallback?: (movie: IMovie) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Like = ({ movie, toggleMovieWishlistCallback = () => {} }: IProps) => {
  const [isOnWishlist, setIsOnWishlist] = useState(false);

  useEffect(() => {
    const isMovieOnWishList = isMovieOnLocalStorage(movie);
    setIsOnWishlist(isMovieOnWishList);
  }, []);

  const toggleMovieWishList = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleMovieOnLocalStorage(movie);
    setIsOnWishlist(!isOnWishlist);
    toggleMovieWishlistCallback(movie);
  };

  return (
    <Button
      onClick={toggleMovieWishList}
      active={isOnWishlist}
      aria-label={isOnWishlist ? REMOVE_FROM_WISHLIST : ADD_TO_WISHLIST}
    >
      <WishlistHeart width={20} height={20} />
    </Button>
  );
};

export default Like;
