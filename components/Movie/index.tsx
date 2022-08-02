import { useState } from 'react';
import { IMovie, IMovieDetails } from '../../types';
import useHover from '../../hooks/useHover';
import BasicInfo from './BasicInfo';
import { Container, Box, ShowButtonOnWishlist } from './styles';
import MovieDetails from './MovieDetails';
import Poster from './Poster';
import axios from 'axios';
import Like from './Like';

interface IProps {
  movie: IMovie;
  removeMovieFromWishlist?: (movie: IMovie) => void;
  isWishlistPage: boolean;
}

const Movie = ({ movie, removeMovieFromWishlist, isWishlistPage }: IProps) => {
  const [hoverRef, isHovered, removeHover] = useHover<HTMLDivElement>();
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState<IMovieDetails | null>(null);
  const [loading, setLoading] = useState(false);

  const openModal = async () => {
    setShowModal(!showModal);
    await getMovieDetails();
    removeHover();
  };

  async function getMovieDetails() {
    setLoading(true);
    try {
      const response = await axios.get<IMovieDetails>(
        `${process.env.NEXT_PUBLIC_API_URL}/OMDB/movie/details`,
        {
          params: { imdbId: movie.imdbID },
        }
      );

      if (response.data.isSuccessful) setDetails(response.data);
      else setDetails(null);
    } catch (error) {
      console.log(error);
      setDetails(null);
    }
    setLoading(false);
  }

  return (
    <Container ref={hoverRef} onClick={openModal}>
      <Box isHovered={isHovered}>
        <Poster movie={movie} isDetails={false} />
        {isWishlistPage && (
          <ShowButtonOnWishlist>
            <Like
              removeMovieFromWishlist={removeMovieFromWishlist}
              movie={movie}
            />
          </ShowButtonOnWishlist>
        )}
      </Box>
      {isHovered && (
        <BasicInfo
          movie={movie}
          removeMovieFromWishlist={removeMovieFromWishlist}
        />
      )}
      {showModal && (
        <MovieDetails
          movieDetails={details}
          loading={loading}
          removeMovieFromWishlist={removeMovieFromWishlist}
        />
      )}
    </Container>
  );
};

export default Movie;
