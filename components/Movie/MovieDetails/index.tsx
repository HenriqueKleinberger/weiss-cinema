import Poster from '../Poster';
import { ERROR_SEARCHING_MOVIE_DETAILS } from '../../../constants/messages';
import { IMovie, IMovieDetails } from '../../../types';
import {
  Container,
  Data,
  Details,
  MainDetails,
  Title,
  Year,
  OtherDetails,
  ErrorData,
  PosterLoading,
  InfoLoading,
  Row,
} from './styles';
import Like from '../Like';
import { DATA_NOT_AVAILABLE } from '../../../constants/movie';

interface IProps {
  movieDetails: IMovieDetails | null;
  loading: boolean;
  removeMovieFromWishlist?: (movie: IMovie) => void;
}

const showInfo = (info: string) => info || DATA_NOT_AVAILABLE;

const MovieDetails = ({
  movieDetails,
  loading,
  removeMovieFromWishlist,
}: IProps) => {
  if (loading) {
    return (
      <Container>
        <Data>
          <PosterLoading />
          <OtherDetails>
            <InfoLoading />
            <InfoLoading />
            <InfoLoading />
            <InfoLoading />
            <InfoLoading />
          </OtherDetails>
        </Data>
      </Container>
    );
  }

  if (!movieDetails) {
    return (
      <Container>
        <ErrorData>
          <p>{ERROR_SEARCHING_MOVIE_DETAILS}</p>
        </ErrorData>
      </Container>
    );
  }

  return (
    <Container>
      <Data>
        <Poster movie={movieDetails} isDetails />
        <Details>
          <MainDetails>
            <Row>
              <Title>{movieDetails.title}</Title>
              <Like
                movie={movieDetails}
                toggleMovieWishlistCallback={removeMovieFromWishlist}
              />
            </Row>
            <Year>{movieDetails.year}</Year>
          </MainDetails>
          <OtherDetails>
            <p>Genre: {showInfo(movieDetails.genre)}</p>
            <p>Release Date: {showInfo(movieDetails.releaseDate)}</p>
            <p>Director: {showInfo(movieDetails.director)}</p>
            <p>Actors: {showInfo(movieDetails.actors)}</p>
            <p>Plot: {showInfo(movieDetails.plot)}</p>
            <p>IMDB rating: {showInfo(movieDetails.imdbRating)}</p>
            {movieDetails.website && (
              <p>
                Website:{' '}
                <a
                  href={movieDetails.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movieDetails.website}
                </a>
              </p>
            )}
          </OtherDetails>
        </Details>
      </Data>
    </Container>
  );
};

export default MovieDetails;
