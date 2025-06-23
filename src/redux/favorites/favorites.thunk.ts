import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import type { PizzaT } from './favorites.type';

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (pizza: PizzaT) => {
    const newItem = { ...pizza, id: uuidv4() };
    const res = await axios.post('http://localhost:3000/basket', newItem);
    return res.data;
  }
);
export const fetchFavorites = createAsyncThunk(
  'favorites/fetchFavorites',
  async () => {
    const res = await axios.get('http://localhost:3000/favorites');
    return res.data as PizzaT[];
  }
);

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async (id: number) => {
    await axios.delete(`http://localhost:3000/favorites/${id}`);
    return id;
  }
);
