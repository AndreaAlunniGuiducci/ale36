import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {bgColorMain, rigthColor, wrongColor} from '../../mainStyles';

export const SentenceAnswerRow = ({style, sentenceStyle, sentence, answerStyle, rigthAnswer}: any) => {
  const [answer, setAnswer] = useState('');
  const [bgInputColor, setBgInputColor] = useState(bgColorMain);

  const checkAnswer = (e: any): string => {
    e.preventDefault();
    if (answer && answer.trim() !== '') {
      if (answer.toUpperCase() === rigthAnswer.toUpperCase()) {
        setBgInputColor(rigthColor)
      } else {
        setBgInputColor(wrongColor);
      }
    }
    return bgColorMain;
  };

  return (
    <View style={[styles.row, style]}>
      <View style={[styles.sentence, sentenceStyle]}>
        <Text>{sentence}</Text>
      </View>
      <TextInput
        style={[styles.answer, {backgroundColor: bgInputColor}, answerStyle]}
        value={answer.toUpperCase()}
        // maxLength={1}
        onChangeText={setAnswer}
        onSubmitEditing={checkAnswer}
      />
    </View>
  );
};
