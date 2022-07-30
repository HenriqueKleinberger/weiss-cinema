import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Movie from '../components/Movie';
import { IMovie, IOmdbMoviesResponse } from '../types';
import { TRUE } from '../constants/omdbResponse';
import { MovieContainer, Input, Search, Message, Separator } from './styles';
import FeedbackMessages from '../components/FeedbackMessages';
import SearchMovie from '../components/FeedbackMessages/SearchMovie';
import SearchImg from '../public/search.svg';
import { SEARCH_RESULTS_FOR } from '../constants/messages';

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
        `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searched}&page=1`
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
      <Search>
        <SearchImg width={15} height={15} />
        <Input
          type="text"
          placeholder="Search your favorite movie"
          onChange={(e) => setSearched(e.target.value)}
          value={searched}
        />
      </Search>
      {searched && <Message>{`${SEARCH_RESULTS_FOR} "${searched}"`}</Message>}
      <Separator />
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
