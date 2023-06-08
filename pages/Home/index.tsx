import {View, Text} from 'react-native';
import { mainStyles } from '../../mainStyles';

export const Home = (): JSX.Element => {
  return (
    <View style={mainStyles.page}>
      <Text>Home Component</Text>
    </View>
  );
};
