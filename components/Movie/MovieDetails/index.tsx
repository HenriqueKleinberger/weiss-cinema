import PosterImg from '../Poster';
import { ERROR_SEARCHING_MOVIE_DETAILS } from '../../../constants/messages';
import { IMovieDetails } from '../../../types';
import {
  Container,
  Data,
  Details,
  MainDetails,
  Title,
  Year,
  OtherDetails,
  Poster,
  ErrorData,
  PosterLoading,
  InfoLoading,
} from './styles';

const showInfoIfAvailable = (info: string) => info || 'N/A';

const MovieDetails = ({
  movieDetails,
  loading,
}: {
  movieDetails: IMovieDetails | null;
  loading: boolean;
}) => {
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
        <Poster>
          <PosterImg movie={movieDetails} />
        </Poster>
        <Details>
          <MainDetails>
            <Title>{movieDetails.title}</Title>
            <Year>{movieDetails.year}</Year>
          </MainDetails>
          <OtherDetails>
            <p>Genre: {showInfoIfAvailable(movieDetails.genre)}</p>
            <p>Release Date: {showInfoIfAvailable(movieDetails.releaseDate)}</p>
            <p>Director: {showInfoIfAvailable(movieDetails.director)}</p>
            <p>Actors: {showInfoIfAvailable(movieDetails.actors)}</p>
            <p>Plot: {showInfoIfAvailable(movieDetails.plot)}</p>
            <p>IMDB rating: {showInfoIfAvailable(movieDetails.imdbRating)}</p>
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
