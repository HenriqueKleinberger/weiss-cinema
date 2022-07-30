import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Movie from '../components/Movie';
import { IMovie, IOmdbMoviesResponse } from '../types';
import { TRUE } from '../constants/omdbResponse';
import { MovieContainer } from './styles';
import FeedbackMessages from '../components/FeedbackMessages';
import SearchMovie from '../components/FeedbackMessages/SearchMovie';

import { SEARCH_RESULTS_FOR } from '../constants/messages';
import SearchInput from '../components/SearchInput';
import SearchMovieSeparator from '../components/SearchMovieSeparator';

const Home: NextPage = () => {
  const [searched, setSearched] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (searched.length === 0) return;
    getMovies(searched);
  }, [searched]);

  const getMovies = async (searched: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searched}`
      );
      const data: IOmdbMoviesResponse = await response.json();
      if (data.Response === TRUE) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setErrorMessage(data.Error);
      }
    } catch (error) {
      setMovies([]);
    }
  };

  return (
    <>
      <SearchInput value={searched} setValue={setSearched} />
      <SearchMovieSeparator searched={searched} message={SEARCH_RESULTS_FOR} />
      <MovieContainer>
        {!searched && <SearchMovie />}
        {searched &&
          movies.length > 0 &&
          movies.map((m) => <Movie movie={m} key={m.imdbID} />)}{' '}
        {searched && movies.length === 0 && (
          <FeedbackMessages errorMessage={errorMessage} />
        )}
      </MovieContainer>
    </>
  );
};

export default Home;
