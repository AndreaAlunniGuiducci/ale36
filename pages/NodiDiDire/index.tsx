import {View} from 'react-native';
import {NodiDiDireRow} from '../../components/NodiDiDireRow';
import {nodiDiDire} from '../../utils/game';
import { styles } from './styles';

export const NodiDiDire = () => {
  return (
    <View style={styles.page}>
      {nodiDiDire.map((item, index) => (
        <NodiDiDireRow
          key={index}
          sentence={item.sentence}
          rigthAnswer={item.answer}
        />
      ))}
    </View>
  );
};
