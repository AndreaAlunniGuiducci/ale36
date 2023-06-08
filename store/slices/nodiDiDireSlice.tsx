import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface solutionState {
  solution: any[];
}

const initialState: solutionState = {
  solution: [],
};

const nodiDiDire = createSlice({
  name: 'gameSolution',
  initialState,
  reducers: {
    setSolution(state, action: PayloadAction<any>) {
      const index = action.payload.index;
      const answer = action.payload.answer;
      const solutionArray = [...state.solution];
      solutionArray[index] = answer;
      state.solution = solutionArray;
    },
  },
});

export default nodiDiDire.reducer;
export const {setSolution} = nodiDiDire.actions;
