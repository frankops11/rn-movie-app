import {View, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Result} from '../interfaces/now_playing.interface';

interface MovieCardProps {
  nowPlayingMovie: Result;
}

const MovieCard = ({nowPlayingMovie}: MovieCardProps) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${nowPlayingMovie.poster_path}`,
        }}
        resizeMode="cover"
        style={styles.image}
        borderRadius={18}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 420,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default MovieCard;
