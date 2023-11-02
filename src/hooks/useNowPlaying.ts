import {useCallback, useEffect, useState} from 'react';
import MovieDB from '../api/MovieDB';
import {NowPlayingResponse, Result} from '../interfaces/now_playing.interface';

const useNowPlaying = () => {
  const [isFetchingNowPlaying, setIsFetchingNowPlaying] = useState(true);
  const [nowPlayingList, setNowPlayingList] = useState<Result[]>([]);

  const fetchNowPlaying = useCallback(async () => {
    return await MovieDB.get<NowPlayingResponse>('/movie/now_playing');
  }, []);

  useEffect(() => {
    fetchNowPlaying()
      .then(response => {
        setNowPlayingList(response.data.results);
        setIsFetchingNowPlaying(false);
      })
      .catch(() => {
        setIsFetchingNowPlaying(false);
      });
  }, [fetchNowPlaying]);

  return {
    nowPlayingList,
    isFetchingNowPlaying,
  };
};
export default useNowPlaying;
