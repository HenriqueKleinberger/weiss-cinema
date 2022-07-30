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
            <Title>{movieDetails.Title}</Title>
            <Year>{movieDetails.Year}</Year>
          </MainDetails>
          <OtherDetails>
            <p>Genre: {showInfoIfAvailable(movieDetails.Genre)}</p>
            <p>Release Date: {showInfoIfAvailable(movieDetails.ReleaseDate)}</p>
            <p>Director: {showInfoIfAvailable(movieDetails.Director)}</p>
            <p>Actors: {showInfoIfAvailable(movieDetails.Actors)}</p>
            <p>Plot: {showInfoIfAvailable(movieDetails.Plot)}</p>
            <p>IMDB rating: {showInfoIfAvailable(movieDetails.imdbRating)}</p>
            {movieDetails.Website && (
              <a
                href={movieDetails.Website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website: {movieDetails.Website}
              </a>
            )}
          </OtherDetails>
        </Details>
      </Data>
    </Container>
  );
};

export default MovieDetails;
