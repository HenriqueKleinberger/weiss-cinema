import React from 'react';
import { MOVIE_NOT_FOUND } from '../../constants/omdbResponse';
import MovieNotFound from './MovieNotFound';
import { Container } from './styles';

const OMDBError = ({ errorMessage }: { errorMessage: string }) => {
  if (errorMessage === MOVIE_NOT_FOUND) {
    return <MovieNotFound />;
  }

  return <Container>{errorMessage || ''}</Container>;
};

export default OMDBError;
