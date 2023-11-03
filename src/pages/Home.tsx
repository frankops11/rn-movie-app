import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import MovieCard from '../components/MovieCard';
import useNowPlaying from '../hooks/useNowPlaying';
import useScreenDimensions from '../hooks/useDimensions';
import MovieSlider from '../components/MovieSlider';

const Home = () => {
  const {nowPlayingList, isFetchingNowPlaying} = useNowPlaying();
  const {viewportWidth} = useScreenDimensions();

  if (isFetchingNowPlaying) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel
          data={nowPlayingList}
          itemWidth={280}
          sliderWidth={viewportWidth}
          containerCustomStyle={styles.carouselContainer}
          renderItem={slideValue => <MovieCard movie={slideValue.item} />}
        />

        <MovieSlider
          title="En cines"
          renderItem={item => (
            <MovieCard
              size="small"
              movie={item.item}
              containerStyle={styles.slideSeparator}
            />
          )}
          keyExtractor={item => item.id.toString()}
          data={nowPlayingList}
        />

        <MovieSlider
          title="Proximos estrenos"
          renderItem={item => (
            <MovieCard
              size="medium"
              movie={item.item}
              containerStyle={styles.slideSeparator}
            />
          )}
          keyExtractor={item => item.id.toString()}
          data={nowPlayingList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    paddingBottom: 8,
    paddingTop: 4,
  },
  slideSeparator: {
    paddingRight: 8,
  },
});

export default Home;
