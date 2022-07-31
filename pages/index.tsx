import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Movie from '../components/Movie';
import { IMovie } from '../types';
import SearchMovie from '../components/FeedbackMessages/SearchMovie';

import { SEARCH_RESULTS_FOR } from '../constants/messages';
import SearchInput from '../components/SearchInput';
import SearchMovieSeparator from '../components/SearchMovieSeparator';
import OMDBError from '../components/FeedbackMessages/OMDBError';
import { MovieContainer, ContainerLoading, LoadingMovie } from './styles';
import { fetchMovies } from '../actions/getMovie';

const Home: NextPage = () => {
  const [searched, setSearched] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getMovies = async (callback: (m: IMovie[]) => IMovie[]) => {
    setLoading(true);
    try {
      const moviesResponse = await fetchMovies(searched, page);
      setMovies(callback(moviesResponse));
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (searched.length === 0) return;
    setPage(1);
    setMovies([]);
    getMovies((m: IMovie[]) => m);
  }, [searched]);

  useEffect(() => {
    if (page > 5 || searched.length === 0) return;
    getMovies((m: IMovie[]) => movies.concat(m));
  }, [page]);

  useEffect(() => {
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [loading, searched, page]);

  const onScroll = () => {
    if (
      !loading &&
      searched &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    ) {
      setPage((p) => p + 1);
    }
  };

  return (
    <>
      <SearchInput value={searched} setValue={setSearched} />
      <SearchMovieSeparator searched={searched} message={SEARCH_RESULTS_FOR} />
      <MovieContainer>
        {!searched && !loading && <SearchMovie />}
        {searched &&
          movies.length > 0 &&
          movies.map((m) => <Movie movie={m} key={m.imdbID} />)}{' '}
        {searched && movies.length === 0 && !loading && (
          <OMDBError message={errorMessage} />
        )}
        {loading && (
          <ContainerLoading>
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
            <LoadingMovie />
          </ContainerLoading>
        )}
      </MovieContainer>
    </>
  );
};

export default Home;
