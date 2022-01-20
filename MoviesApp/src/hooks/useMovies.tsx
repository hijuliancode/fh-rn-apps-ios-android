import React from 'react';
import {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces';

export const useMovies = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [movies, setMovies] = React.useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMovies(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    movies,
    isLoading,
  };
};
