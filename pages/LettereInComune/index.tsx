import {ScrollView, Text, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import {mainStyles} from '../../mainStyles';
import {lettereInComune} from '../../utils/game';
import {styles} from './styles';

export const LettereInComune = () => {
  
  return (
    <ScrollView>
      <View style={mainStyles.page}>
        {lettereInComune.map((item: any, index: number) => (
          <LettereInComuneGame
            style={styles.singleGame}
            key={index}
            sentences={item.sentences}
            rightAnswer={item.answer}
          />
        ))}
      </View>
    </ScrollView>
  );
};
