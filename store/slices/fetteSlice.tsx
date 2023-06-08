import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface solutionState {
  solution: any[];
}

const initialState: solutionState = {
  solution: [],
};

const fetteSlice = createSlice({
  name: 'gameSolution',
  initialState,
  reducers: {
    setSolutionFette(state, action: PayloadAction<any>) {
      const index = action.payload.index;
      const answer = action.payload.answer;
      const solutionArray = [...state.solution];
      solutionArray[index] = answer;
      state.solution = solutionArray;
    },
  },
});

export default fetteSlice.reducer;
export const {setSolutionFette} = fetteSlice.actions;
