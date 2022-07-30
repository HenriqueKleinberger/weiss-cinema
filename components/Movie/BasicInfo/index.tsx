import { useState } from 'react';
import useWishListLocalStorage from '../../../hooks/useWishlistLocalStorage';
import { IMovie } from '../../../types';
import { Like, Data } from './styles';
import WishlistHeart from '../../../public/heart-solid.svg';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../../../constants/messages';

const BasicInfo = ({ movie }: { movie: IMovie }) => {
  const [isMovieOnWishlist, toggleMovieOnWishlist] = useWishListLocalStorage(
    movie.imdbID
  );
  const [isOnWishlist, setIsOnWishlist] = useState(isMovieOnWishlist);
  const toggleMovieWishList = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleMovieOnWishlist(movie.imdbID);
    setIsOnWishlist(!isMovieOnWishlist);
  };

  return (
    <>
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
        <p>{movie.Title.toUpperCase()}</p>
        <p>{movie.Year}</p>
      </Data>
    </>
  );
};

export default BasicInfo;
