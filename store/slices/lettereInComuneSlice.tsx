import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface solutionState {
  solution: any[];
}

const initialState: solutionState = {
  solution: [],
};

const lettereInComune = createSlice({
  name: 'gameSolution',
  initialState,
  reducers: {
    setSolutionLettere(state, action: PayloadAction<any>) {
      const index = action.payload.index;
      const answer = action.payload.answer;
      const solutionArray = [...state.solution];
      solutionArray[index] = answer;
      state.solution = solutionArray;
    },
  },
});

export default lettereInComune.reducer;
export const {setSolutionLettere} = lettereInComune.actions;
