import { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import SearchInput from '../../components/SearchInput';
import SearchMovieSeparator from '../../components/SearchMovieSeparator';
import { SEARCH_RESULTS_FOR_ON_WISHLIST } from '../../constants/messages';
import { getMoviesFromLocalStorage } from '../../helpers/localStorageWishlist';
import { IMovie } from '../../types';
import EmptyWishlist from '../../components/FeedbackMessages/EmptyWishlist';
import { MovieContainer } from '../styles';

const Wishlist = () => {
  const [searched, setSearched] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const moviesFromLocalStorage = getMoviesFromLocalStorage();
    setMovies(moviesFromLocalStorage);
  }, []);

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
        {movies.length === 0 ? (
          <EmptyWishlist />
        ) : (
          movies
            .filter((m) =>
              m?.title?.toLowerCase().includes(searched.toLowerCase())
            )
            .map((m) => (
              <Movie
                movie={m}
                key={m.imdbID}
                removeMovieFromWishlist={removeMovieFromWishlist}
                shouldShowLikeButton
              />
            ))
        )}
      </MovieContainer>
    </>
  );
};

export default Wishlist;
