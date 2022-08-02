import { useState, useEffect } from 'react';
import Movie from '../../components/Movie';
import { getMoviesFromLocalStorage } from '../../helpers/localStorageWishlist';
import { IMovie } from '../../types';
import EmptyWishlist from '../../components/FeedbackMessages/EmptyWishlist';

const Wishlist = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(getMoviesFromLocalStorage());
  }, []);

  const removeMovieFromWishlist = (movie: IMovie) =>
    setMovies(movies.filter((m) => m.imdbID !== movie.imdbID));

  return (
    <>
      {movies.length === 0 ? (
        <EmptyWishlist />
      ) : (
        movies.map((m) => (
          <Movie
            movie={m}
            key={m.imdbID}
            removeMovieFromWishlist={removeMovieFromWishlist}
            isWishlist
          />
        ))
      )}
    </>
  );
};

export default Wishlist;
