import {View, Image, Pressable} from 'react-native';
import {mainStyles} from '../../mainStyles';
import {styles} from './styles';
import {useAppSelector} from '../../cusomHooks/reduxHooks';
import {SolutionReader} from '../../components/SolutionReader';

export const Home = (): JSX.Element => {
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
    
  };

  return (
    <View style={mainStyles.page}>
      <View style={styles.imageWrapper}>
        <Pressable onPress={() => console.log('regalo')}>
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
