import { EMPTY_WISHLIST } from '../../../constants/messages';
import MovieImg from '../../../public/logo.svg';
import { Container } from '../styles';

const EmptyWishlist = () => {
  return (
    <Container>
      <MovieImg width={100} height={100} />
      <p>{EMPTY_WISHLIST}</p>
    </Container>
  );
};

export default EmptyWishlist;
