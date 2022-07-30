export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface IOmdbMoviesResponse {
  Search: IMovie[];
  Response: string;
  Error: string;
}

export interface IMovieDetails {
  imdbID: string;
  Title: string;
  Year: string;
  ReleaseDate: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  imdbRating: string;
  Website: string;
  Poster: string;
  Response: string;
}
