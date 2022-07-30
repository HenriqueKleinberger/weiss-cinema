import { useState } from 'react';
import Movie from '../../components/Movie';
import SearchInput from '../../components/SearchInput';
import SearchMovieSeparator from '../../components/SearchMovieSeparator';
import { SEARCH_RESULTS_FOR_ON_WISHLIST } from '../../constants/messages';
import { getMoviesFromLocalStorage } from '../../helpers/localStorageWishlist';
import { IMovie } from '../../types';
import { MovieContainer } from '../styles';

const Wishlist = () => {
  const [searched, setSearched] = useState('');
  const [movies, setMovies] = useState<IMovie[]>(getMoviesFromLocalStorage());

  const removeMovieFromWishlist = (movie: IMovie) =>
    setMovies(movies.filter((m) => m.imdbID !== movie.imdbID));

  return (
    <>
      <SearchInput value={searched} setValue={setSearched} />
      <SearchMovieSeparator
        searched={searched}
        message={SEARCH_RESULTS_FOR_ON_WISHLIST}
      />
      <MovieContainer>
        {movies.map((m) => (
          <Movie
            movie={m}
            key={m.imdbID}
            removeMovieFromWishlist={removeMovieFromWishlist}
          />
        ))}
      </MovieContainer>
    </>
  );
};

export default Wishlist;
