import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchFavorites,
  addToFavorites,
  removeFromFavorites,
} from './favorites.thunk';
import type { PizzaT } from './favorites.type';

type FavoritesState = {
  items: PizzaT[];
  loading: boolean;
  error: string | null;
};

const initialState: FavoritesState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchFavorites.fulfilled,
        (state, action: PayloadAction<PizzaT[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка';
      })
      .addCase(
        addToFavorites.fulfilled,
        (state, action: PayloadAction<PizzaT>) => {
          state.items.push(action.payload);
        }
      )
      .addCase(
        removeFromFavorites.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      );
  },
});

export default favoritesSlice.reducer;
