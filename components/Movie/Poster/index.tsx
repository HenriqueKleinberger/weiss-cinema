import Image from 'next/image';
import { IMovie } from '../../../types';
import { DATA_NOT_AVAILABLE } from '../../../constants/movie';

const Poster = ({ movie }: { movie: IMovie }) => {
  return (
    <Image
      src={
        movie.poster !== DATA_NOT_AVAILABLE
          ? movie.poster
          : '/image-not-available.png'
      }
      alt={movie.title}
      layout="fill"
    />
  );
};

export default Poster;
