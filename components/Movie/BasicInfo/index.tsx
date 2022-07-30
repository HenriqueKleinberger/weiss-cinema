import { useState } from 'react';
import useWishListLocalStorage from '../../../hooks/useWishlistLocalStorage';
import { IMovie } from '../../../types';
import { Like, Data } from './styles';
import WishlistHeart from '../../../public/heart-solid.svg';

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
