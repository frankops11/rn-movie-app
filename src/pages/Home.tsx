import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import MovieCard from '../components/MovieCard';
import useMovies from '../hooks/useMovies';
import useScreenDimensions from '../hooks/useDimensions';
import MovieSlider from '../components/MovieSlider';

const Home = () => {
  const {movieData} = useMovies();
  const {viewportWidth} = useScreenDimensions();

  return (
    <SafeAreaView>
      <ScrollView>
        <Carousel
          data={movieData?.now_playing}
          itemWidth={280}
          sliderWidth={viewportWidth}
          containerCustomStyle={styles.carouselContainer}
          renderItem={slideValue => <MovieCard movie={slideValue.item} />}
        />

        <MovieSlider
          title="Popular"
          renderItem={item => (
            <MovieCard
              size="small"
              movie={item.item}
              containerStyle={styles.slideSeparator}
            />
          )}
          keyExtractor={item => item.id.toString()}
          data={movieData?.popular}
        />

        <MovieSlider
          title="Top rated"
          renderItem={item => (
            <MovieCard
              size="small"
              movie={item.item}
              containerStyle={styles.slideSeparator}
            />
          )}
          keyExtractor={item => item.id.toString()}
          data={movieData?.top_rated}
        />

        <MovieSlider
          title="Upcoming"
          renderItem={item => (
            <MovieCard
              size="medium"
              movie={item.item}
              containerStyle={styles.slideSeparator}
            />
          )}
          keyExtractor={item => item.id.toString()}
          data={movieData?.upcoming}
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
