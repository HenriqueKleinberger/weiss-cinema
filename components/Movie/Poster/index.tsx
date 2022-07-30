import Image from 'next/image';
import { IMovie } from '../../../types';
import { DATA_NOT_AVAILABLE } from '../../../constants/movie';

const Poster = ({ movie }: { movie: IMovie }) => {
  return (
    <Image
      src={
        movie.Poster !== DATA_NOT_AVAILABLE
          ? movie.Poster
          : '/image-not-available.png'
      }
      alt={movie.Title}
      layout="fill"
    />
  );
};

export default Poster;
