import {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Menu, Button} from 'react-native-paper';

export const Header = ({title, navigation}: any) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Text onPress={openMenu}>Menu</Text>}>
        <Menu.Item onPress={() => navigation.navigate('Home')} title="Home" />
        <Menu.Item onPress={() => navigation.navigate('LettereInComune')} title="Primo Gioco" />
      </Menu>
    </View>
  );
};
