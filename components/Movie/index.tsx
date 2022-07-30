import { useState } from 'react';
import { IMovie, IMovieDetails } from '../../types';
import useHover from '../../hooks/useHover';
import BasicInfo from './BasicInfo';
import { Container, Box } from './styles';
import MovieDetails from './MovieDetails';
import { TRUE } from '../../constants/omdbResponse';
import Poster from './Poster';

interface IProps {
  movie: IMovie;
  removeMovieFromWishlist?: (movie: IMovie) => void;
}

const Movie = ({ movie, removeMovieFromWishlist }: IProps) => {
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

      if (data.Response === TRUE) {
        setDetails(data);
      } else {
        setDetails(null);
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
        <Poster movie={movie} />
      </Box>
      {isHovered && (
        <BasicInfo
          movie={movie}
          removeMovieFromWishlist={removeMovieFromWishlist}
        />
      )}
      {showModal && <MovieDetails movieDetails={details} loading={loading} />}
    </Container>
  );
};

export default Movie;
