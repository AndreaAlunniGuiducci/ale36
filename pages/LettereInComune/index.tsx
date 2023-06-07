import {ScrollView, Text, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import {styles} from './styles';

export const LettereInComune = () => {
  return (
    <ScrollView>
      <View style={styles.lettereInComune}>
        <LettereInComuneGame />
        <Text></Text>
        <LettereInComuneGame />
        <Text></Text>
        <LettereInComuneGame />
        <Text></Text>
        <LettereInComuneGame />
        <Text></Text>
      </View>
    </ScrollView>
  );
};
