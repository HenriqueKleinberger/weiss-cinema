import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { IMovie, IOmdbResponse } from '../types';
import { TRUE } from '../constants/omdbResponse';

const Home: NextPage = () => {
  const [searched, setSearched] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (searched.length < 3) return;
    getMovies(searched);
  }, [searched]);

  const getMovies = async (searched: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${searched}&page=1`
      );
      const data: IOmdbResponse = await response.json();
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
      <input
        type="text"
        placeholder="Search your favorite movie"
        onChange={(e) => setSearched(e.target.value)}
        value={searched}
      />
      <div>
        {movies.length > 0 ? (
          movies.map((m) => <div key={m.imdbID}>{m.Title}</div>)
        ) : (
          <div>{errorMessage || 'Buscar um filme'}</div>
        )}
      </div>
    </>
  );
};

export default Home;
