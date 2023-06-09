import {View, Image, Pressable, Alert, Text} from 'react-native';
import {mainStyles} from '../../mainStyles';
import {styles} from './styles';
import {useAppSelector} from '../../cusomHooks/reduxHooks';
import {SolutionReader} from '../../components/SolutionReader';
import {finalSolution} from '../../utils/game';
import {CustomModal} from '../../components/Modal';
import {useState} from 'react';

export const Home = (): JSX.Element => {
  const [GiftModalIsOpen, setGiftModalIsOpen] = useState(false);
  const openGiftModal = () => setGiftModalIsOpen(true);
  const closeGiftModal = () => setGiftModalIsOpen(false);

  const lettereSolution = useAppSelector(state =>
    state.lettereInComune.solution.join(''),
  );
  const fetteSolution = useAppSelector(state => state.fette.solution.join(''));
  const gemelliSolution = useAppSelector(state =>
    state.gemelliDiversi.solution.join(''),
  );
  const nodiSolution = useAppSelector(state =>
    state.nodiDiDIre.solution.join(''),
  );

  const openPresent = () => {
    const finalSolutionArr = finalSolution.split(' ');
    if (
      finalSolutionArr[0].toUpperCase() === fetteSolution.toUpperCase() &&
      finalSolutionArr[1].toUpperCase() === lettereSolution.toUpperCase() &&
      finalSolutionArr[2].toUpperCase() === nodiSolution.toUpperCase() &&
      finalSolutionArr[3].toUpperCase() === gemelliSolution.toUpperCase()
    ) {
      console.log('ok');
    } else {
      openGiftModal();
    }
  };

  return (
    <View style={mainStyles.page}>
      <View style={styles.imageWrapper}>
        <CustomModal
          modalIsVisible={GiftModalIsOpen}
          closeModal={closeGiftModal}
          text={
            'Sembra che il regalo sia chiuso, ' +
            'premi il pulsante "info" in alto magari c\'é un indizio su come aprirlo'
          }
        />
        <Text style={styles.homeText}>Tanti auguri per questi 36 anni,</Text>
        <Text style={styles.homeText}>ecco un bel regalo per te</Text>
        <Pressable onPress={openPresent}>
          <Image source={require('../../images/PaccoRegaloGrande.png')} />
        </Pressable>
      </View>
      <View style={styles.finalSolution}>
        <SolutionReader
          solution={fetteSolution.trim() !== '' ? fetteSolution : '__'}
        />
        <SolutionReader
          solution={lettereSolution.trim() !== '' ? lettereSolution : '__'}
        />
        <SolutionReader
          solution={nodiSolution.trim() !== '' ? nodiSolution : '__'}
        />
        <SolutionReader
          solution={gemelliSolution.trim() !== '' ? gemelliSolution : '__'}
        />
      </View>
    </View>
  );
};
