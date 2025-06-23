import { configureStore } from '@reduxjs/toolkit';
import advReducer from './adv/adv.slice';
import cardReducer from './card/card.slice';

export const store = configureStore({
  reducer: {
    adv: advReducer,
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
