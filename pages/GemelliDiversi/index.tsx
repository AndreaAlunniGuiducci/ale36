import {Text, View} from 'react-native';
import {gemelliDiversi} from '../../utils/game';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {mainStyles} from '../../mainStyles';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '../../cusomHooks/reduxHooks';
import { SolutionReader } from '../../components/SolutionReader';
import { setSolutionGemelli } from '../../store/slices/gemelliDiversiSlice';

export const GemelliDiversi = () => {
  const dispatch = useAppDispatch();
  const solution = useAppSelector(state =>
    state.gemelliDiversi.solution.join(''),
  );

  const dispatchSolution = (answer: any, index: number) => {
    dispatch(setSolutionGemelli({answer: answer, index: index}));
  };
  return (
    <View style={mainStyles.page}>
      {gemelliDiversi.map((item, index) => (
        <SentenceAnswerRow
          sentenceStyle={styles.sentence}
          answerStyle={styles.answer}
          key={index}
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
