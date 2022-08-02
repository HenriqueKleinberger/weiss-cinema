import { IMovie } from '../../../types';
import { Data, Hovered, Wishlist } from './styles';
import Like from '../Like';

interface IProps {
  movie: IMovie;
  removeMovieFromWishlist?: (movie: IMovie) => void;
}

const BasicInfo = ({ movie, removeMovieFromWishlist }: IProps) => {
  const getMovieTitle = () => {
    if (movie.title.length >= 90)
      return `${movie.title.slice(0, 90).toUpperCase()}...`;
    else return movie.title.toUpperCase();
  };

  return (
    <Hovered>
      <Wishlist>
        <Like movie={movie} removeMovieFromWishlist={removeMovieFromWishlist} />
      </Wishlist>
      <Data>
        <p>{getMovieTitle()}</p>
        <p>{movie.year}</p>
      </Data>
    </Hovered>
  );
};

export default BasicInfo;
