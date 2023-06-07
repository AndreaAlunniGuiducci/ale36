import {StyleSheet} from 'react-native';
import {withAnchorPoint} from 'react-native-anchor-point';

export const getRotate = (deg: string, height: number, width: number) => {
  return withAnchorPoint(
    {
      transform: [{rotate: deg}],
    },
    {x: 0, y: 1},
    {height: 0.5, width: width},
  );
};
export const styles = StyleSheet.create({
  gameOne: {
    borderWidth: 1,
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {flex: 1},
  textInput: {
    borderBottomWidth: 1,
  },
  linesWrapper: {flex: 2, display: 'flex', justifyContent: 'center'},

  lineOne: {height: 0.5, borderTopWidth: 1},
  lineTwo: {height: 0.5, borderTopWidth: 1},
  lineThree: {height: 0.5, borderTopWidth: 1},
  lineFour: {height: 0.5, borderTopWidth: 1},
  wordsWrapper: {flex: 1},
});
