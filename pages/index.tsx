import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Movie from '../components/Movie';
import { IMovie, IOmdbMoviesResponse } from '../types';
import { MOVIE_NOT_FOUND, TRUE } from '../constants/omdbResponse';
import SearchMovie from '../components/FeedbackMessages/SearchMovie';

import { SEARCH_RESULTS_FOR } from '../constants/messages';
import SearchInput from '../components/SearchInput';
import SearchMovieSeparator from '../components/SearchMovieSeparator';
import OMDBError from '../components/FeedbackMessages/OMDBError';
import { MovieContainer, ContainerLoading, LoadingMovie } from './styles';

const Home: NextPage = () => {
  const [searched, setSearched] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    const getMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searched}*&page=1`
        );
        const data: IOmdbMoviesResponse = await response.json();
        if (data.Response === TRUE) {
          setMovies(data.Search);
          setLoading(false);
        } else {
          setMovies([]);
          setErrorMessage(data.Error);
          setLoading(false);
        }
      } catch (error) {
        setMovies([]);
        setLoading(false);
      }
    };
    if (searched.length === 0) return;
    getMovies();
  }, [searched]);

  useEffect(() => {
    const getMoreMovies = async (newPage: number) => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searched}*&page=${newPage}`
        );
        const data: IOmdbMoviesResponse = await response.json();
        if (data.Response === TRUE || data.Response === MOVIE_NOT_FOUND) {
          setMovies(movies.concat(data.Search));
          setLoading(false);
        } else if (data.Response === MOVIE_NOT_FOUND) {
          setLoading(false);
        } else {
          setErrorMessage(data.Error);
          setLoading(false);
        }
      } catch (error) {
        setMovies([]);
        setLoading(false);
      }
    };
    getMoreMovies(page);
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
