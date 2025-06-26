import { configureStore } from '@reduxjs/toolkit';
import advReducer from './adv/adv.slice';
import cardReducer from './card/card.slice';
import basketReducer from './basket/basket.slice';
import favoritesReducer from './favorites/favorites.slice';
import frequentlyReducer from './frequently/frequently.slice';

export const store = configureStore({
  reducer: {
    adv: advReducer,
    card: cardReducer,
    basket: basketReducer,
    favorites: favoritesReducer,
    frequently: frequentlyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
