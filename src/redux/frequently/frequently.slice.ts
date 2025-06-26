import { createSlice } from '@reduxjs/toolkit';
import { frequentlyFetch } from './frequently.thunk';
import { type PizzaT } from './frequently.type';

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
      .addCase(frequentlyFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(frequentlyFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(frequentlyFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default CardSlice.reducer;
