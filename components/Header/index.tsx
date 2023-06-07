import {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Menu} from 'react-native-paper';
import {menuItem} from '../../utils/menuItem';

export const Header = ({navigation}: any) => {
  const routes = navigation.getState().routes;
  const title = routes.length > 0 ? routes[routes.length - 1].name : '';

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
        {menuItem.map((title, index) => (
          <Menu.Item
            key={index}
            onPress={() => {
              closeMenu();
              navigation.navigate(title);
            }}
            title={title}
          />
        ))}
      </Menu>
    </View>
  );
};
