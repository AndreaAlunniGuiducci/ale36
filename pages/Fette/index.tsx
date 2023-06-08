import {View} from 'react-native';
import {mainStyles} from '../../mainStyles';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {fette} from '../../utils/game';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../cusomHooks/reduxHooks';
import {setSolutionFette} from '../../store/slices/fetteSlice';
import { SolutionReader } from '../../components/SolutionReader';

export const Fette = () => {
  const dispatch = useAppDispatch();
  const solution = useAppSelector(state =>
    state.fette.solution.join(''),
  );

  const dispatchSolution = (answer: any, index: number) => {
    dispatch(setSolutionFette({answer: answer[0], index: index}));
  };
  return (
    <View style={mainStyles.page}>
      {fette.map((item: any, index: number) => (
        <SentenceAnswerRow
          key={index}
          style={styles.gameRow}
          sentence={item.sentence}
          rigthAnswer={item.answer}
          index={index}
          dispatchSolution={dispatchSolution}
          solution={solution}
        />
      ))}
      <SolutionReader solution={solution} />
    </View>
  );
};
