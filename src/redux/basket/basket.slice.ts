import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PizzaT } from './basket.type';
import { fetchBasket, addToBasket, removeFromBasket } from './basket.thunk';

type BasketState = {
  items: PizzaT[];
  loading: boolean;
  error: string | null;
};

const initialState: BasketState = {
  items: [],
  loading: false,
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasket.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchBasket.fulfilled,
        (state, action: PayloadAction<PizzaT[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка';
      })
      .addCase(
        addToBasket.fulfilled,
        (state, action: PayloadAction<PizzaT>) => {
          state.items.push(action.payload);
        }
      )
      .addCase(
        removeFromBasket.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      );
  },
});

export default basketSlice.reducer;
