import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {getRotate, styles} from './styles';

export const LettereInComuneGame = () => {
  const [wrapperLinesWidth, setWrapperLinesWidth] = useState(0);
  return (
    <View style={styles.gameOne}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.textInput} />
      </View>
      <View
        style={styles.linesWrapper}
        onLayout={event =>
          setWrapperLinesWidth(event.nativeEvent.layout.width)
        }>
        <View
          style={[
            styles.lineOne,
            getRotate('351deg', 0.5, wrapperLinesWidth),
            {width: wrapperLinesWidth}
          ]}></View>
        <View
          style={[
            styles.lineTwo,
            getRotate('356deg', 0.5, wrapperLinesWidth),
            {width: wrapperLinesWidth},
          ]}></View>
        <View
          style={[
            styles.lineThree,
            getRotate('4deg', 1, wrapperLinesWidth),
          ]}></View>
        <View
          style={[
            styles.lineFour,
            getRotate('10deg', 1, wrapperLinesWidth),
          ]}></View>
      </View>
      <View style={styles.wordsWrapper}>
        <View>
          <Text>parola 1</Text>
        </View>
        <View>
          <Text>parola 2</Text>
        </View>
        <View>
          <Text>parola 3</Text>
        </View>
        <View>
          <Text>parola 4</Text>
        </View>
      </View>
    </View>
  );
};
