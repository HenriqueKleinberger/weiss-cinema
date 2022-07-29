export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export interface IOmdbResponse {
  Search: IMovie[];
  Response: string;
  Error: string;
}
