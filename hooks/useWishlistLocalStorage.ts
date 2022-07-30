import { LOCAL_STORAGE_WISHLIST } from '../constants/wishlist';
import { IMovie } from '../types';

const useWishListLocalStorage = (movie: IMovie) => {
  const getMoviesFromLocalStorage = (): IMovie[] => {
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

  const isMovieOnWishlist = (() => {
    const movies = getMoviesFromLocalStorage();
    return movies.find((m) => m.imdbID === movie.imdbID) !== undefined;
  })();

  const toggleMovieOnWishlist = (movie: IMovie) => {
    const movies = getMoviesFromLocalStorage();
    window.localStorage.setItem(
      LOCAL_STORAGE_WISHLIST,
      JSON.stringify(
        isMovieOnWishlist
          ? movies.filter((m) => m.imdbID === movie.imdbID)
          : movies.concat([movie])
      )
    );
  };
  return [isMovieOnWishlist, toggleMovieOnWishlist] as const;
};

export default useWishListLocalStorage;
