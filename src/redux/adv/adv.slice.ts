import { createSlice } from '@reduxjs/toolkit';
import { advFetch } from './adv.thunk';
import { type PizzaT } from './adv.type';

interface AdvState {
  data: PizzaT[];
  loading: boolean;
  error: string | null;
}

const initialState: AdvState = {
  data: [],
  loading: false,
  error: null,
};

const AdvSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(advFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(advFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(advFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default AdvSlice.reducer;
