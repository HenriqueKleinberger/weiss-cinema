export interface IMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
}

export interface IMoviesResponse {
  movies: IMovie[];
  isSuccessful: boolean;
  message: string;
  totalResults: number;
}

export interface IMovieDetails extends IMovie {
  releaseDate: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  imdbRating: string;
  website: string;
  isSuccessful: boolean;
}
