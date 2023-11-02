import {ActivityIndicator} from 'react-native';
import React from 'react';
import useNowPlaying from '../hooks/useNowPlaying';
import {SafeAreaView} from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const {nowPlayingList, isFetchingNowPlaying} = useNowPlaying();

  if (isFetchingNowPlaying) {
    return (
      <SafeAreaView>
        <ActivityIndicator color="red" size={20} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <MovieCard nowPlayingMovie={nowPlayingList[7]} />
    </SafeAreaView>
  );
};
export default Home;
