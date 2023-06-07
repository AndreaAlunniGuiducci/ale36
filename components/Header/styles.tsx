import {StyleSheet} from 'react-native';
import {headerFontSize} from '../../mainStyles';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
  },
  headerTitle: {
    fontSize: headerFontSize,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  textMenu: {
    fontSize: headerFontSize,
  },
});
