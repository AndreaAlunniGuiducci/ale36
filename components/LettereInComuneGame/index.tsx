import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {getRotate, styles} from './styles';
import {bgColorMain} from '../../mainStyles';
import {checkAnswer} from '../../utils/checkAnswer';

export const LettereInComuneGame = ({
  style,
  index,
  dispatchSolution,
  answerStyle,
  rightAnswer,
  sentences,
}: any) => {
  const [wrapperLinesWidth, setWrapperLinesWidth] = useState(0);
  const [answer, setAnswer] = useState('');
  const [bgInputColor, setBgInputColor] = useState(bgColorMain);

  const submitAnswer = (e: any) => {
    e.preventDefault();
    setBgInputColor(checkAnswer(answer, rightAnswer));
    dispatchSolution(answer, index);

  };
  return (
    <View style={[styles.gameOne, style]}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.textInput,
            {backgroundColor: bgInputColor},
            answerStyle,
          ]}
          autoCapitalize={'characters'}
          value={answer}
          onChangeText={setAnswer}
          onSubmitEditing={submitAnswer}
        />
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
            {width: wrapperLinesWidth},
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
        {sentences.map((item: string, index: number) => (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
