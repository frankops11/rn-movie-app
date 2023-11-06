import {Dimensions, ScrollView, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../router/StackNavigator';
import MovieCard from '../components/MovieCard';

const screenHeight = Dimensions.get('screen').height;

interface DetailProps extends StackScreenProps<RootStackParams, 'Detail'> {}

const Detail: FC<DetailProps> = ({route}) => {
  const movie = route.params;
  return (
    <ScrollView>
      <View>
        <MovieCard
          containerStyle={styles.movieCardContainer}
          imageStyles={styles.imageStyle}
          movie={movie}
        />
      </View>
      <View>
        <Text>{movie.original_title}</Text>
        <Text>{movie.title}</Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieCardContainer: {
    width: '100%',
    height: screenHeight * 0.7,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});

export default Detail;
