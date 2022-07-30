import React from 'react';
import { MOVIE_NOT_FOUND } from '../../../constants/omdbResponse';
import MovieNotFound from './MovieNotFound';
import { Container } from '../styles';

interface IProps {
  message: string;
}

const OMDBError = ({ message }: IProps) => {
  if (message === MOVIE_NOT_FOUND) {
    return <MovieNotFound />;
  }

  return (
    <Container>
      <p>{message || ''}</p>
    </Container>
  );
};

export default OMDBError;
