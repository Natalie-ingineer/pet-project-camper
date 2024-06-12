import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d8667dc96fbb24c1bb6f49.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'camper/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/camper');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
