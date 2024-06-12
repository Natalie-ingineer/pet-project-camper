import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d8667dc96fbb24c1bb6f49.mockapi.io/camper';

export const fetchCampers = createAsyncThunk(
  'catalog/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/catalog');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCamper = createAsyncThunk(
  'favorites/addCamper',
  async (newCamper, thunkAPI) => {
    try {
      const response = await axios.post('/favorites', newCamper);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCamper = createAsyncThunk(
  'favorites/deleteCamper',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.delete(`/favorites/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
