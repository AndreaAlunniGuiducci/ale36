import {View} from 'react-native';
import {SentenceAnswerRow} from '../../components/SentenceAnswerRow';
import {nodiDiDire} from '../../utils/game';
import {mainStyles} from '../../mainStyles';
import {useAppDispatch, useAppSelector} from '../../cusomHooks/reduxHooks';
import {setSolutionNodi} from '../../store/slices/nodiDiDireSlice';
import {SolutionReader} from '../../components/SolutionReader';

export const NodiDiDire = () => {
  const dispatch = useAppDispatch();
  const solution = useAppSelector(state => state.nodiDiDIre.solution.join(''));

  const dispatchSolution = (answer: any, index: number) => {
    dispatch(setSolutionNodi({answer: answer[0], index: index}));
  };

  return (
    <View style={mainStyles.page}>
      {nodiDiDire.map((item, index) => (
        <SentenceAnswerRow
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
