import {StyleSheet} from 'react-native';
import {windowsWidth} from '../../mainStyles';

export const styles = StyleSheet.create({
  imageWrapper: {
    marginHorizontal: windowsWidth / 10,
  },
  finalSolution: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
});
