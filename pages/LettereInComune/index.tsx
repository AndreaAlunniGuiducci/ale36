import {ScrollView, Text, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import {styles} from './styles';
import { CustomModal } from '../../components/Modal';

export const LettereInComune = () => {
  return (
    <ScrollView>
      <CustomModal/>
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
