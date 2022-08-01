import { useEffect, useState } from 'react';
import axios, { Canceler } from 'axios';
import { IMovie, IMoviesResponse } from '../types';

export default function useMovieSearch(query: string, page: number) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [query]);

  useEffect(() => {
    if (query.length === 0) return;
    setLoading(true);
    setErrorMessage('');
    let cancel: Canceler;
    axios
      .get<IMoviesResponse>(`${process.env.NEXT_PUBLIC_API_URL}/movie`, {
        params: { title: query, page },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        if (res.data.isSuccessful) {
          setMovies((prevMovies: IMovie[]) => [
            ...prevMovies,
            ...res.data.movies,
          ]);
          setHasMore(movies.length !== res.data.totalResults);
        } else {
          setErrorMessage(res.data.message);
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        if (axios.isCancel(e)) return;
        setErrorMessage(e.message);
      });
    return () => cancel();
  }, [query, page]);

  return { loading, errorMessage, movies, hasMore };
}
