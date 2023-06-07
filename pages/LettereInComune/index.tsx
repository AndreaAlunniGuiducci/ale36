import {ScrollView, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import {styles} from './styles';

export const LettereInComune = () => {
  return (
    <ScrollView>
      <View style={styles.lettereInComune}>
        <LettereInComuneGame />
        <LettereInComuneGame />
        <LettereInComuneGame />
        <LettereInComuneGame />
      </View>
    </ScrollView>
  );
};
