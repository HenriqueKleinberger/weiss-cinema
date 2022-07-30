import Image from 'next/image';
import { useState } from 'react';
import { IMovie, IMovieDetails } from '../../types';
import { DATA_NOT_AVAILABLE } from '../../constants/movie';
import useHover from '../../hooks/useHover';
import BasicInfo from './BasicInfo';
import { Container, Box, Hovered } from './styles';
import MovieDetails from './MovieDetails';
import { FALSE } from '../../constants/omdbResponse';

const Movie = ({ movie }: { movie: IMovie }) => {
  const [hoverRef, isHovered, isOut] = useHover<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState<IMovieDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const openModal = async () => {
    setShowModal(!showModal);
    setLoading(true);
    isOut();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${movie.imdbID}`
      );
      const data: IMovieDetails = await response.json();

      if (data.Response === FALSE) {
        setDetails(null);
      } else {
        setDetails(data);
      }
      setLoading(false);
    } catch (error) {
      setDetails(null);
      setLoading(false);
    }
  };

  return (
    <Container ref={hoverRef} onClick={openModal}>
      <Box isHovered={isHovered}>
        <Image
          src={
            movie.Poster !== DATA_NOT_AVAILABLE
              ? movie.Poster
              : '/image-not-available.png'
          }
          alt={movie.Title}
          layout="fill"
          key={movie.imdbID}
        />
      </Box>
      {isHovered && (
        <Hovered>
          <BasicInfo movie={movie} />
        </Hovered>
      )}
      {showModal && <MovieDetails movieDetails={details} loading={loading} />}
    </Container>
  );
};

export default Movie;
