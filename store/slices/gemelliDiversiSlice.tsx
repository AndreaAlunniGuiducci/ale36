import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface solutionState {
  solution: any[];
}

const initialState: solutionState = {
  solution: [],
};

const gemelliDiversiSlice = createSlice({
  name: 'gameSolution',
  initialState,
  reducers: {
    setSolutionGemelli(state, action: PayloadAction<any>) {
      const index = action.payload.index;
      const answer = action.payload.answer;
      const solutionArray = [...state.solution];
      solutionArray[index] = answer;
      state.solution = solutionArray;
    },
  },
});

export default gemelliDiversiSlice.reducer;
export const {setSolutionGemelli} = gemelliDiversiSlice.actions;
