import {configureStore} from '@reduxjs/toolkit';
import nodiDiDireSlice from './slices/nodiDiDireSlice';

export const store = configureStore({
  reducer: {
    nodiDiDIre: nodiDiDireSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
