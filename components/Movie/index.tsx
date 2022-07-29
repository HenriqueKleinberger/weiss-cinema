import Image from 'next/image';
import React from 'react';
import { IMovie } from '../../types';
import { POSTER_NOT_AVAILABLE } from '../../constants/movie';

const Movie = ({ movie }: { movie: IMovie }) => {
  return (
    <Image
      src={
        movie.Poster !== POSTER_NOT_AVAILABLE
          ? movie.Poster
          : '/image-not-available.png'
      }
      alt={movie.Title}
      width={200}
      height={300}
      key={movie.imdbID}
    />
  );
};

export default Movie;
