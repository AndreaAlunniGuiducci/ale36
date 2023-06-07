import {bgColorMain, rigthColor, wrongColor} from '../mainStyles';

export const checkAnswer = (answer: string, rigthAnswer: string): string => {
  if (answer && answer.trim() !== '') {
    if (answer.toUpperCase() === rigthAnswer.toUpperCase()) {
      return rigthColor;
    } else {
      return wrongColor;
    }
  }
  return bgColorMain;
};
