import { MOVIE_NOT_FOUND_MESSAGE } from '../../../constants/messages';
import SadEmotion from '../../../public/face-frown-open-solid.svg';
import { Container } from '../styles';

const MovieNotFound = () => {
  return (
    <Container>
      <SadEmotion width={100} height={100} />
      <p>{MOVIE_NOT_FOUND_MESSAGE}</p>
    </Container>
  );
};

export default MovieNotFound;
