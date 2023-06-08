import {Dimensions, StatusBar, StyleSheet} from 'react-native';

export const windowsHeight = Dimensions.get('screen').height;
export const headerFontSize = 20;
export const solutionTextFontSize = 50;
export const rigthColor = '#69b00b';
export const wrongColor = '#b00b';
export const bgColorMain = '#ffff';
export const bgColorHeader = '#dddd';

export const mainStyles = StyleSheet.create({
  mainView: {
    paddingTop: StatusBar.currentHeight,
    borderBottomWidth: 1,
    backgroundColor: bgColorHeader,
    height: windowsHeight,
  },
  page: {
    backgroundColor: bgColorMain,
    padding: 5,
    height: windowsHeight,
    marginBottom: StatusBar.currentHeight,
  },
});
