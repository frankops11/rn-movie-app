import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import MovieCard from '../components/MovieCard';
import useNowPlaying from '../hooks/useNowPlaying';
import useScreenDimensions from '../hooks/useDimensions';

const Home = () => {
  const {nowPlayingList} = useNowPlaying();
  const {viewportWidth} = useScreenDimensions();

  return (
    <SafeAreaView>
      <Carousel
        data={nowPlayingList}
        itemWidth={280}
        sliderWidth={viewportWidth}
        containerCustomStyle={styles.carouselContainer}
        renderItem={slideValue => (
          <MovieCard nowPlayingMovie={slideValue.item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingBottom: 8,
    paddingTop: 4,
  },
});

export default Home;
