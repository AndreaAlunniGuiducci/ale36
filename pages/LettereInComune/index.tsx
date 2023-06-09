import {ScrollView, Text, View} from 'react-native';
import {LettereInComuneGame} from '../../components/LettereInComuneGame';
import {bgColorMain, mainStyles, windowsHeight} from '../../mainStyles';
import {lettereInComune} from '../../utils/game';
import {styles} from './styles';
import {SolutionReader} from '../../components/SolutionReader';
import {useAppDispatch, useAppSelector} from '../../cusomHooks/reduxHooks';
import {setSolutionLettere} from '../../store/slices/lettereInComuneSlice';

export const LettereInComune = () => {
  const dispatch = useAppDispatch();
  const solution = useAppSelector(state => state.lettereInComune.solution);

  const dispatchSolution = (answer: any, index: number) => {
    dispatch(setSolutionLettere({answer: answer, index: index}));
  };
  return (
    <ScrollView>
      <View style={[mainStyles.page]}>
        {lettereInComune.map((item: any, index: number) => (
          <LettereInComuneGame
            style={styles.singleGame}
            key={index}
            sentences={item.sentences}
            dispatchSolution={dispatchSolution}
            index={index}
            rightAnswer={item.answer}
            solution={solution}
          />
        ))}
        <SolutionReader solution={solution.join('')} />
      </View>
      <View
        style={{
          height: windowsHeight / 5,
          backgroundColor: bgColorMain,
        }}></View>
    </ScrollView>
  );
};
