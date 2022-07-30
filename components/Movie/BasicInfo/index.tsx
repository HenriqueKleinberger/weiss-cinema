import { useState } from 'react';
import useWishListLocalStorage from '../../../hooks/useWishlistLocalStorage';
import { IMovie } from '../../../types';
import { Like, Data, Hovered } from './styles';
import WishlistHeart from '../../../public/heart-solid.svg';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../../../constants/messages';

const getMovieTitle = (title: string) => {
  if (title.length >= 90) return `${title.slice(0, 90).toUpperCase()}...`;
  else return title.toUpperCase();
};

const BasicInfo = ({ movie }: { movie: IMovie }) => {
  const [isMovieOnWishlist, toggleMovieOnWishlist] =
    useWishListLocalStorage(movie);
  const [isOnWishlist, setIsOnWishlist] = useState(isMovieOnWishlist);
  const toggleMovieWishList = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleMovieOnWishlist(movie);
    setIsOnWishlist(!isMovieOnWishlist);
  };

  return (
    <Hovered>
      <Like
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          toggleMovieWishList(e);
        }}
        active={isOnWishlist}
        aria-label={isOnWishlist ? REMOVE_FROM_WISHLIST : ADD_TO_WISHLIST}
      >
        <WishlistHeart width={20} height={20} />
      </Like>
      <Data>
        <p>{getMovieTitle(movie.Title)}</p>
        <p>{movie.Year}</p>
      </Data>
    </Hovered>
  );
};

export default BasicInfo;
