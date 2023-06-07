import {View, Modal, Text} from 'react-native';
import {styles} from './styles';
import {useState} from 'react';

export const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      transparent={true}>
      <View style={styles.innerModal}>
        <Text>Testo Prova asdsdfagadf ba fgbvadfg argb df</Text>
        <Text onPress={() => setModalVisible(false)}>Chiudi</Text>
      </View>
    </Modal>
  );
};
