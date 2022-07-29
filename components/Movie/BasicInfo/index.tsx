import Image from 'next/image';
import { useState } from 'react';
import useWishListLocalStorage from '../../../hooks/useWishlistLocalStorage';
import { IMovie } from '../../../types';
import { Title, Year, Container, Like } from './styles';

const BasicInfo = ({ movie }: { movie: IMovie }) => {
  const [isMovieOnWishlist, toggleMovieOnWishlist] = useWishListLocalStorage(
    movie.imdbID
  );
  const [isOnWishlist, setIsOnWishlist] = useState(isMovieOnWishlist);
  const toggleMovieWishList = () => {
    toggleMovieOnWishlist(movie.imdbID);
    setIsOnWishlist(!isMovieOnWishlist);
  };

  return (
    <Container>
      <Like onClick={toggleMovieWishList}>
        <Image width={10} height={10} src="/heart-solid.svg" alt="like" />
      </Like>
      <Title>{movie.Title}</Title>
      <Year>{movie.Year}</Year>
      {isOnWishlist && 'FAVORITADO'}
    </Container>
  );
};

export default BasicInfo;
