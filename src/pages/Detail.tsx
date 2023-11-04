import {SafeAreaView, Text} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../router/StackNavigator';

interface DetailProps extends StackScreenProps<RootStackParams, 'Detail'> {}

const Detail: FC<DetailProps> = ({route}) => {
  return (
    <SafeAreaView>
      <Text>Detail - {route?.params?.title}</Text>
    </SafeAreaView>
  );
};
export default Detail;
