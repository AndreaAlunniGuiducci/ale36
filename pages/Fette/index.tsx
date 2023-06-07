import {View} from 'react-native';
import {mainStyles} from '../../mainStyles';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {fette} from '../../utils/game';
import {styles} from './styles';

export const Fette = () => {
  return (
    <View style={mainStyles.page}>
      {fette.map((item: any, index: number) => (
        <SentenceAnswerRow
          key={index}
          style={styles.gameRow}
          sentence={item.sentence}
          rigthAnswer={item.answer}
        />
      ))}
    </View>
  );
};
