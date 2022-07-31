import { IMoviesResponse } from '../types';

export const fetchMovies = async (title: string, page = 1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie?title=${title}&page=${page}`
  );

  const data: IMoviesResponse = await response.json();

  if (data.isSuccessful) return data.movies;
  else throw new Error(data.message);
};
