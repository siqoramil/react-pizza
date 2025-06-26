import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { type PizzaT } from './frequently.type';

const API: string = import.meta.env.VITE_SOME_KEY;

export const frequentlyFetch = createAsyncThunk('data/pizza', async () => {
  const response = await axios.get<PizzaT[]>(`${API}/data`);
  return response.data as PizzaT[];
});
