import { SEARCH_MOVIE } from '../../../constants/messages';
import MovieImg from '../../../public/logo.svg';
import { Container } from '../styles';

const SearchMovie = () => {
  return (
    <Container>
      <MovieImg width={100} height={100} />
      <p>{SEARCH_MOVIE}</p>
    </Container>
  );
};

export default SearchMovie;
