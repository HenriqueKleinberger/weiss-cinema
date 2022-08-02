import Image from 'next/image';
import { IMovie } from '../../../types';
import { DATA_NOT_AVAILABLE } from '../../../constants/movie';
import { Frame } from './styles';

interface IProps {
  isDetails: boolean;
  movie: IMovie;
}

const Poster = ({ movie, isDetails }: IProps) => {
  const imageUrl =
    movie.poster !== DATA_NOT_AVAILABLE
      ? movie.poster
      : '/image-not-available.png';
  if (isDetails) {
    return (
      <Frame>
        <Image
          src={imageUrl}
          alt={movie.title}
          layout="fill"
          objectFit="contain"
        />
      </Frame>
    );
  }
  return <Image src={imageUrl} alt={movie.title} layout="fill" />;
};

export default Poster;
