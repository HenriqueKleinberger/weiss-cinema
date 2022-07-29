import { LOCAL_STORAGE_WISHLIST } from '../constants/wishlist';

const useWishListLocalStorage = (movieId: string) => {
  const getMoviesFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      let wishlistMoviesOnLocalStorage = window.localStorage.getItem(
        LOCAL_STORAGE_WISHLIST
      );
      if (wishlistMoviesOnLocalStorage) {
        return (wishlistMoviesOnLocalStorage = JSON.parse(
          wishlistMoviesOnLocalStorage
        )) as string[];
      } else {
        return [];
      }
    }
    return [];
  };

  const isMovieOnWishlist = (() => {
    const movies = getMoviesFromLocalStorage();
    return movies.includes(movieId);
  })();

  const toggleMovieOnWishlist = (movieId: string) => {
    if (typeof window !== 'undefined') {
      const movies = getMoviesFromLocalStorage();
      const index = movies?.indexOf(movieId);
      if (index !== -1) {
        movies?.splice(index, 1);
      } else {
        movies?.push(movieId);
      }

      window.localStorage.setItem(
        LOCAL_STORAGE_WISHLIST,
        JSON.stringify(movies)
      );
    }
  };
  return [isMovieOnWishlist, toggleMovieOnWishlist] as const;
};

export default useWishListLocalStorage;
