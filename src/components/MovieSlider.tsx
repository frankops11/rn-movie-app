import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {FlatListProps} from 'react-native/Libraries/Lists/FlatList';

interface MovieSliderProps<T> extends FlatListProps<T> {
  title: string;
  renderItem: (info: {
    item: T;
    index: number;
    separators?: any;
  }) => React.JSX.Element | null;
  keyExtractor: (item: T) => string;
}

const MovieSlider = <T,>({
  title,
  horizontal = true,
  ...rest
}: MovieSliderProps<T>) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.sliderContainer}
        horizontal={horizontal}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  sliderContainer: {
    padding: 8,
  },
});

export default MovieSlider;
