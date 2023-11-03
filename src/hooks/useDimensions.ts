import {Dimensions} from 'react-native';

const useDimensions = () => {
  const {width, height} = Dimensions.get('screen');
  return {
    viewportHeight: height,
    viewportWidth: width,
  };
};
export default useDimensions;
