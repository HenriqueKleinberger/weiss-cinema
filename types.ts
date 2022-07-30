export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export interface IOmdbMoviesResponse {
  Search: IMovie[];
  Response: string;
  Error: string;
}

export interface IMovieDetails extends IMovie {
  ReleaseDate: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  Website: string;
  Response: string;
}
