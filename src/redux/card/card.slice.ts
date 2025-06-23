import { createSlice } from '@reduxjs/toolkit';
import { cardsFetch } from './card.thunk';
import { type PizzaT } from './card.types';

interface CardState {
  data: PizzaT[];
  loading: boolean;
  error: string | null;
}

const initialState: CardState = {
  data: [],
  loading: false,
  error: null,
};

const CardSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cardsFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(cardsFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(cardsFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default CardSlice.reducer;
