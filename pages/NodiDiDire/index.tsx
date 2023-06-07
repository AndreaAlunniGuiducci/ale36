import {View} from 'react-native';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {nodiDiDire} from '../../utils/game';
import { mainStyles } from '../../mainStyles';

export const NodiDiDire = () => {
  return (
    <View style={mainStyles.page}>
      {nodiDiDire.map((item, index) => (
        <SentenceAnswerRow
          key={index}
          sentence={item.sentence}
          rigthAnswer={item.answer}
        />
      ))}
    </View>
  );
};
