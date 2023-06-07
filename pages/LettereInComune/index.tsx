import {ScrollView, Text, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import { mainStyles } from '../../mainStyles';

export const LettereInComune = () => {
  return (
    <ScrollView>
      <View style={mainStyles.page}>
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
