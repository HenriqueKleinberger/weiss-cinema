import React from 'react';
import { MOVIE_NOT_FOUND } from '../../constants/omdbResponse';
import MovieNotFound from './MovieNotFound';

const OMDBError = ({ errorMessage }: { errorMessage: string }) => {
  if (errorMessage === MOVIE_NOT_FOUND) {
    return <MovieNotFound />;
  }

  return <div>{errorMessage || 'Buscar um filme'}</div>;
};

export default OMDBError;
