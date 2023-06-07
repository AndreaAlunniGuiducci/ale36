import {StyleSheet} from 'react-native';
import { windowsHeight } from '../../mainStyles';

export const styles = StyleSheet.create({
  lettereInComune: {
    height: windowsHeight,
    display: 'flex',
    backgroundColor: '#ffff'
  },
  row:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  }
});
