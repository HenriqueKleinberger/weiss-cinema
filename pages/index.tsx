// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useRef, useCallback } from 'react';
import type { NextPage } from 'next';
import Movie from '../components/Movie';
import SearchMovie from '../components/FeedbackMessages/SearchMovie';

import { SEARCH_RESULTS_FOR } from '../constants/messages';
import SearchInput from '../components/SearchInput';
import SearchMovieSeparator from '../components/SearchMovieSeparator';
import OMDBError from '../components/FeedbackMessages/OMDBError';
import { MovieContainer } from './styles';
import useMovieSearch from '../hooks/useMovieSearch';
import MoviesLoading from '../components/Loading/MoviesLoading';

const Home: NextPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const { movies, loading, hasMore, errorMessage } = useMovieSearch(
    query,
    page
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieElementRef = useCallback(
    (node: Element) => {
      if (loading) return;
      observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          movies.length === page * 10
        ) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, movies]
  );

  const changeQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <>
      <SearchInput value={query} setValue={changeQuery} />
      <SearchMovieSeparator searched={query} message={SEARCH_RESULTS_FOR} />
      <MovieContainer>
        {!query && <SearchMovie />}
        {movies.map((m, index) => {
          if (movies.length === index + 1) {
            return (
              <div ref={lastMovieElementRef}>
                <Movie movie={m} key={m.imdbID} />
              </div>
            );
          }
          return <Movie movie={m} key={m.imdbID} />;
        })}
        {errorMessage && movies.length === 0 && !loading && (
          <OMDBError message={errorMessage} />
        )}
        {loading && <MoviesLoading />}
      </MovieContainer>
    </>
  );
};

export default Home;
