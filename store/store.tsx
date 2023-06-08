import {configureStore} from '@reduxjs/toolkit';
import nodiDiDireSlice from './slices/nodiDiDireSlice';
import lettereInComuneSlice from './slices/lettereInComuneSlice';
import gemelliDiversiSlice from './slices/gemelliDiversiSlice';
import fetteSlice from './slices/fetteSlice';

export const store = configureStore({
  reducer: {
    nodiDiDIre: nodiDiDireSlice,
    lettereInComune: lettereInComuneSlice,
    gemelliDiversi: gemelliDiversiSlice,
    fette: fetteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
