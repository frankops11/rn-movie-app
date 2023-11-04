import {useEffect, useState} from 'react';
import MovieDB from '../api/MovieDB';
import {MovieResponse, Movie} from '../interfaces/movie_response.interface';

type MovieDataState = {
  now_playing: Movie[];
  popular: Movie[];
  top_rated: Movie[];
  upcoming: Movie[];
};

type LoadingState = {
  now_playing: boolean;
  popular: boolean;
  top_rated: boolean;
  upcoming: boolean;
};

type ErrorState = {
  now_playing: string | null;
  popular: string | null;
  top_rated: string | null;
  upcoming: string | null;
};

const useMovies = () => {
  const [isLoading, setIsLoading] = useState<LoadingState>({
    now_playing: true,
    popular: true,
    top_rated: true,
    upcoming: true,
  });

  const [movieData, setMovieData] = useState<MovieDataState>({
    now_playing: [],
    popular: [],
    top_rated: [],
    upcoming: [],
  });

  const [errors, setErrors] = useState<ErrorState>({
    now_playing: null,
    popular: null,
    top_rated: null,
    upcoming: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async (path: keyof MovieDataState) => {
      setIsLoading(prev => ({...prev, [path]: true}));

      try {
        const {data} = await MovieDB.get<MovieResponse>(`/movie/${path}`);
        if (isMounted) {
          setMovieData(prev => ({
            ...prev,
            [path]: data.results,
          }));
          setErrors(prev => ({...prev, [path]: null}));
        }
      } catch (error) {
        if (isMounted) {
          setErrors(prev => ({
            ...prev,
            [path]:
              error instanceof Error
                ? error.message
                : 'An unknown error occurred',
          }));
        }
      } finally {
        if (isMounted) {
          setIsLoading(prev => ({...prev, [path]: false}));
        }
      }
    };

    fetchMovies('now_playing');
    fetchMovies('popular');
    fetchMovies('top_rated');
    fetchMovies('upcoming');

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    movieData,
    isLoading,
    errors,
  };
};

export default useMovies;
