import {Dimensions, StatusBar, StyleSheet} from 'react-native';

export const windowsHeight = Dimensions.get('screen').height;

export const mainStyles = StyleSheet.create({
  mainView: {
    padding: 5,
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 1,
    backgroundColor: '#ffff',
    height: windowsHeight,
  },
});
