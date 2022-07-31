import { useState } from 'react';
import {
  isMovieOnWishlist,
  toggleMovieOnWishlist,
} from '../../../helpers/localStorageWishlist';
import { IMovie } from '../../../types';
import WishlistHeart from '../../../public/heart-solid.svg';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../../../constants/messages';
import { Like, Data, Hovered } from './styles';

interface IProps {
  movie: IMovie;
  removeMovieFromWishlist?: (movie: IMovie) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const BasicInfo = ({ movie, removeMovieFromWishlist = () => {} }: IProps) => {
  const [isOnWishlist, setIsOnWishlist] = useState(isMovieOnWishlist(movie));

  const toggleMovieWishList = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    toggleMovieOnWishlist(movie);
    setIsOnWishlist(!isOnWishlist);
    removeMovieFromWishlist(movie);
  };

  const getMovieTitle = () => {
    if (movie.title.length >= 90)
      return `${movie.title.slice(0, 90).toUpperCase()}...`;
    else return movie.title.toUpperCase();
  };

  return (
    <Hovered>
      <Like
        onClick={(e: React.MouseEvent<HTMLElement>) => toggleMovieWishList(e)}
        active={isOnWishlist}
        aria-label={isOnWishlist ? REMOVE_FROM_WISHLIST : ADD_TO_WISHLIST}
      >
        <WishlistHeart width={20} height={20} />
      </Like>
      <Data>
        <p>{getMovieTitle()}</p>
        <p>{movie.year}</p>
      </Data>
    </Hovered>
  );
};

export default BasicInfo;
