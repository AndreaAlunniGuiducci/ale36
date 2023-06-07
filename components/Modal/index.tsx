import {View, Modal, Text} from 'react-native';
import {styles} from './styles';

export const CustomModal = ({modalIsVisible, closeModal}: any) => {
  return (
    <Modal
      visible={modalIsVisible}
      animationType="slide"
      onRequestClose={closeModal}
      transparent={true}>
      <View style={styles.innerModal}>
        <Text>Testo Prova asdsdfagadf ba fgbvadfg argb df</Text>
        <Text onPress={closeModal}>Chiudi</Text>
      </View>
    </Modal>
  );
};
