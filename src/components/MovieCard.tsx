import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

import {Movie} from '../interfaces/movie_response.interface';

type MovieCardSize = 'small' | 'medium' | 'large';

interface MovieCardProps {
  movie: Movie;
  size?: MovieCardSize;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const MovieCard = ({
  movie,
  size = 'large',
  containerStyle,
  onPress,
}: MovieCardProps) => {
  return (
    <TouchableOpacity
      style={containerStyle}
      activeOpacity={0.8}
      onPress={onPress ? onPress : undefined}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
        resizeMode="cover"
        style={[styles.image, styles[size as keyof typeof styles]]}
        borderRadius={18}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  large: {
    width: 280,
    height: 380,
  },
  medium: {
    width: 200,
    height: 340,
  },
  small: {
    width: 140,
    height: 200,
  },
});

export default MovieCard;
