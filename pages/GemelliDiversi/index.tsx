import {Text, View} from 'react-native';
import {gemelliDiversi} from '../../utils/game';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {mainStyles} from '../../mainStyles';
import {styles} from './styles';

export const GemelliDiversi = () => {
  return (
    <View style={mainStyles.page}>
      {gemelliDiversi.map((item, index) => (
        <SentenceAnswerRow
          sentenceStyle={styles.sentence}
          answerStyle={styles.answer}
          key={index}
          sentence={item.sentence}
          rigthAnswer={item.answer}
        />
      ))}
    </View>
  );
};
