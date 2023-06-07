import {Dimensions, StatusBar, StyleSheet} from 'react-native';

export const windowsHeight = Dimensions.get('screen').height;
export const headerFontSize = 20;
export const rigthColor = '#69b00b'
export const wrongColor = '#b00b'
export const bgColorMain = '#ffff'

export const mainStyles = StyleSheet.create({
  mainView: {
    padding: 5,
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 1,
    backgroundColor: bgColorMain,
    height: windowsHeight,
  },
});
