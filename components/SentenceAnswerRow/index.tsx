import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {bgColorMain, rigthColor, wrongColor} from '../../mainStyles';
import {checkAnswer} from '../../utils/checkAnswer';

export const SentenceAnswerRow = ({
  style,
  sentenceStyle,
  sentence,
  answerStyle,
  rigthAnswer,
}: any) => {
  const [answer, setAnswer] = useState('');
  const [bgInputColor, setBgInputColor] = useState(bgColorMain);

  const submitAnswer = (e: any) => {
    e.preventDefault();
    setBgInputColor(checkAnswer(answer, rigthAnswer));
  };
  return (
    <View style={[styles.row, style]}>
      <View style={[styles.sentence, sentenceStyle]}>
        <Text>{sentence}</Text>
      </View>
      <TextInput
        autoCapitalize={'characters'}
        style={[styles.answer, {backgroundColor: bgInputColor}, answerStyle]}
        value={answer}
        onChangeText={setAnswer}
        onSubmitEditing={submitAnswer}
      />
    </View>
  );
};
