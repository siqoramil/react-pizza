import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import type { PizzaT } from './basket.type';

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async (pizza: PizzaT) => {
    const newItem = { ...pizza, id: uuidv4() };
    const res = await axios.post('http://localhost:3000/basket', newItem);
    return res.data;
  }
);

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async () => {
  const res = await axios.get('http://localhost:3000/basket');
  return res.data as PizzaT[];
});

export const removeFromBasket = createAsyncThunk(
  'basket/removeFromBasket',
  async (id: number) => {
    await axios.delete(`http://localhost:3000/basket/${id}`);
    return id;
  }
);
