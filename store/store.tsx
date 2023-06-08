import {configureStore} from '@reduxjs/toolkit';
import nodiDiDireSlice from './slices/nodiDiDireSlice';
import lettereInComuneSlice from './slices/lettereInComuneSlice';

export const store = configureStore({
  reducer: {
    nodiDiDIre: nodiDiDireSlice,
    lettereInComune: lettereInComuneSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
