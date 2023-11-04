import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import {Movie} from '../interfaces/movie_response.interface';

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
