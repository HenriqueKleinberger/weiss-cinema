import { LOCAL_STORAGE_WISHLIST } from '../constants/wishlist';
import { IMovie } from '../types';

export const getMoviesFromLocalStorage = (): IMovie[] => {
  if (typeof window !== 'undefined') {
    let wishlistMoviesOnLocalStorage = window.localStorage.getItem(
      LOCAL_STORAGE_WISHLIST
    );
    if (wishlistMoviesOnLocalStorage) {
      return (wishlistMoviesOnLocalStorage = JSON.parse(
        wishlistMoviesOnLocalStorage
      )) as IMovie[];
    } else {
      return [];
    }
  }
  return [];
};

export const isMovieOnLocalStorage = (movie: IMovie) => {
  const movies = getMoviesFromLocalStorage();
  return movies.find((m) => m.imdbID === movie.imdbID) !== undefined;
};

export const toggleMovieOnLocalStorage = (movie: IMovie) => {
  const movies = getMoviesFromLocalStorage();
  window.localStorage.setItem(
    LOCAL_STORAGE_WISHLIST,
    JSON.stringify(
      isMovieOnLocalStorage(movie)
        ? movies.filter((m) => m.imdbID !== movie.imdbID)
        : movies.concat([movie])
    )
  );
};
