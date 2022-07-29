import Image from 'next/image';
import React from 'react';
import { IMovie } from '../../types';
import { POSTER_NOT_AVAILABLE } from '../../constants/movie';
import useHover from '../../hooks/useHover';
import BasicInfo from './BasicInfo';
import { Container, Box, Hovered } from './styles';

const Movie = ({ movie }: { movie: IMovie }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <Container ref={hoverRef}>
      <Box>
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
      </Box>
      {isHovered && (
        <Hovered>
          <BasicInfo movie={movie} />
        </Hovered>
      )}
    </Container>
  );
};

export default Movie;
